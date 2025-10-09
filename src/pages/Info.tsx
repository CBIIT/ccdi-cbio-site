import { FC, useEffect, useState } from 'react';

async function fetchAPIVersion() {
  const apiVersion = process.env.REACT_APP_API_VERSION;
  if (!apiVersion) {
    return { portalVersion: 'REACT_APP_API_VERSION not specified' };
  }
  try {
    const response = await fetch(apiVersion);

    if (!response.ok) {
      throw new Error('Failed to fetch API version');
    }

    const content = await response.json();
    return content;
  } catch (error) {
    console.error('Error fetching API version:', error);
    return { portalVersion: 'Failed to fetch API version' };
  }
}

async function fetchSessionServiceVersion() {
  const sessionServiceVersion = process.env.REACT_APP_SESSION_SERVICE_VERSION;
  if (!sessionServiceVersion) {
    return 'REACT_APP_SESSION_SERVICE_VERSION not specified';
  }
  try {
    const response = await fetch(sessionServiceVersion);

    if (!response.ok) {
      throw new Error('Failed to fetch Session Service version');
    }

    const content = await response.text();
    return content;
  } catch (error) {
    console.error('Error fetching Session Service version:', error);
    return 'Failed to fetch Session Service version';
  }
}

async function getContentUIVersion() {
  const contentUIVersion = process.env.REACT_APP_CONTENT_UI_VERSION;
  if (!contentUIVersion) {
    return 'REACT_APP_CONTENT_UI_VERSION not specified';
  }
  try {
    const response = await fetch(contentUIVersion, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch Content UI version');
    const meta = await response.json();
    return meta.version;
  } catch (error) {
    console.error('Error fetching Content UI version:', error);
    return 'Failed to fetch Content UI version';
  }
}

async function getFrontendVersion() {
  const frontendVersion = process.env.REACT_APP_FRONTEND_VERSION;
  if (!frontendVersion) {
    return 'REACT_APP_FRONTEND_VERSION not specified';
  }
  try {
    const response = await fetch(frontendVersion, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch Frontend version');
    const meta = await response.json();
    return meta.version;
  } catch (error) {
    console.error('Error fetching Frontend version:', error);
    return 'Failed to fetch Frontend version';
  }
}

const Info: FC = () => {
  const [apiVersion, setApiVersion] = useState<string | null>(null);
  const [sessionServiceVersion, setSessionServiceVersion] = useState<string | null>(null);
  const [contentUIVersion, setContentUIVersion] = useState<string | null>(null);
  const [frontendVersion, setFrontendVersion] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      Promise.all([
        fetchAPIVersion(),
        fetchSessionServiceVersion(),
        getContentUIVersion(),
        getFrontendVersion()
      ]).then((values) => {
        const [
          apiData,
          sessionServiceData,
          contentUIData,
          frontendData
        ] = values;

        setApiVersion(apiData.portalVersion);
        setSessionServiceVersion(sessionServiceData);
        setContentUIVersion(contentUIData);
        setFrontendVersion(frontendData);
      });
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
      <h1>Version Information</h1>
      <div>
        Frontend versions
        <ul>
          <li>App (ccdi-cbio-site) version: <b>{process.env.REACT_APP_VERSION}</b></li>
          <li>IFrame (ccdi-cbio-frontend) version: <b>{frontendVersion}</b></li>
          <li>Content UI (ccdi-cbio-content-ui) version: <b>{contentUIVersion}</b></li>
        </ul>
      </div>
      <div>Backend (ccdi-cbio-backend) version: <b>{apiVersion}</b></div>
      <div>Session Service (ccdi-cbio-session-service) version: <b>{sessionServiceVersion}</b></div>
    </div>
  );
};

export default Info;
