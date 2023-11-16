import CookiesJS from 'js-cookie';
import { auth, data } from '../../assets/mocks';
import { AUTH_URL, QUESTIONNAIRE_VERSIONS } from '../../constants';
import { Cookies } from '../../enum';
import { fetchCallOptions } from '../../types';

const fetchCall = (
	method: string,
	endpoint: string,
	options?: fetchCallOptions
): Promise<unknown> => {
	const init = { method };
	const headers = {
		'Content-Type': 'application/json',
		'X-Authorization': `Bearer ${CookiesJS.get(Cookies.RA_ACCESS)}`
	};

	if (method === 'POST') {
		if (endpoint.endsWith('questionnaire')) {
			init.body = JSON.stringify(options);
		} else {
			init.body = options;
		}
	}

	if (!endpoint.endsWith('access-token')) {
		init.headers = headers;
	}

	// return fake values +
	if (endpoint === AUTH_URL) {
		return Promise.resolve(auth);
	}

	if (
		endpoint === QUESTIONNAIRE_VERSIONS ||
		(endpoint.includes('project_name') && endpoint.includes('type'))
	) {
		return Promise.resolve(data);
	}
	// return fake values +

	// return fetch(endpoint, init);
};

export default fetchCall;
