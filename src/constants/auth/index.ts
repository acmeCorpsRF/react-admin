import { TAuthFormData } from '../../types';

export const AGIS_DOMAIN = 'agis_auth';
export const CLIENT_ID = 'client_id';
export const CLIENT_SECRET = 'client_secret';
export const LOCATION: Location = window.location;
export const ORIGIN = LOCATION.origin;
export const SEARCH = LOCATION.search;
export const STRING_PATTERN = /code=/;

export const AGIS_URL = `${ORIGIN}/?code=`;
export const AUTH_URL = `https://${AGIS_DOMAIN}/api/oauth2/access-token`;

export const FORM_DATA: TAuthFormData = {
	client_id: CLIENT_ID,
	client_secret: CLIENT_SECRET,
	code: SEARCH.substring(6, location.search.length),
	grant_type: 'authorization_code',
	redirect_uri: ORIGIN
};
