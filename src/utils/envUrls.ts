export const CBIO_WEB_API_DOCS_URL = 'https://docs.cbioportal.org/web-api-and-clients/';

export function joinEnvUrl(base: string | undefined, path: string): string {
  if (!base?.trim()) {
    return '';
  }

  const normalizedBase = base.replace(/\/+$/, '');
  const normalizedPath = path.replace(/^\/+/, '');

  return normalizedPath ? `${normalizedBase}/${normalizedPath}` : normalizedBase;
}

export function getWebApiNavLink(): string {
  const swaggerUrl = joinEnvUrl(
    process.env.REACT_APP_CCDI_CBIO_API_URL,
    '/api/swagger-ui/index.html',
  );

  return swaggerUrl || CBIO_WEB_API_DOCS_URL;
}
