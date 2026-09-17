import { FC, useEffect, useState } from 'react';
import { joinEnvUrl } from '../utils/envUrls';

async function fetchAPIVersion() {
  const apiInfoUrl = joinEnvUrl(process.env.REACT_APP_CCDI_CBIO_API_URL, '/api/info');
  if (!apiInfoUrl) {
    return { portalVersion: 'REACT_APP_CCDI_CBIO_API_URL not specified' };
  }
  try {
    const response = await fetch(apiInfoUrl, { cache: 'no-store' });

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
  const sessionInfoUrl = joinEnvUrl(process.env.REACT_APP_CCDI_CBIO_API_URL, '/api/session/info');
  if (!sessionInfoUrl) {
    return 'REACT_APP_CCDI_CBIO_API_URL not specified';
  }
  try {
    const response = await fetch(sessionInfoUrl, { cache: 'no-store' });

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
  const contentUiVersionUrl = joinEnvUrl(process.env.REACT_APP_CCDI_CBIO_CONTENT_UI_URL, '/version.json');
  if (!contentUiVersionUrl) {
    return 'REACT_APP_CCDI_CBIO_CONTENT_UI_URL not specified';
  }
  try {
    const response = await fetch(contentUiVersionUrl, { cache: 'no-store' });
    if (!response.ok) throw new Error('Failed to fetch Content UI version');
    const meta = await response.json();
    return meta.version;
  } catch (error) {
    console.error('Error fetching Content UI version:', error);
    return 'Failed to fetch Content UI version';
  }
}

async function getFrontendVersion() {
  const frontendVersionUrl = joinEnvUrl(process.env.REACT_APP_CCDI_CBIO_IFRAME_URL, '/reactapp/version.json');
  if (!frontendVersionUrl) {
    return 'REACT_APP_CCDI_CBIO_IFRAME_URL not specified';
  }
  try {
    const response = await fetch(frontendVersionUrl, { cache: 'no-store' });
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
      const values = await Promise.all([
        fetchAPIVersion(),
        fetchSessionServiceVersion(),
        getContentUIVersion(),
        getFrontendVersion()
      ]);

      const [
        apiData,
        sessionServiceData,
        contentUIData,
        frontendData
      ] = values;

      setApiVersion(apiData.portalVersion ?? 'Unknown');
      setSessionServiceVersion(sessionServiceData);
      setContentUIVersion(contentUIData);
      setFrontendVersion(frontendData);
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px' }}>
      <h1>Version Information</h1>
      <div>
        Frontend versions
        <ul>
          <li>App (ccdi-cbio-site) version: <b>{process.env.REACT_APP_VERSION || 'unknown'}</b></li>
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
