import CookiesJS from 'js-cookie';
import { HttpError } from 'react-admin';
import { AUTH_URL, FORM_DATA, USER } from '../../constants';
import { Cookies, LocalStorage } from '../../enum';
import { TTokenJson } from '../../types';
import { fetchCall } from '../../utils';

const getAuth = (): Promise<void> => {
	const formData = new FormData();

	for (const prop in FORM_DATA) {
		if (Object.hasOwn(FORM_DATA, prop)) {
			formData.append(prop, FORM_DATA[prop]);
		}
	}

	return (
		fetchCall('POST', AUTH_URL, formData)
			// .then((response: unknown) => response.json())
			.then((response: TTokenJson) => {
				const { access_token, expires_in: expiresIn, refresh_token }: string | number = response;
				const maxAge: number = expiresIn / 1000 / 60 / 60 / 24;
				CookiesJS.set(encodeURIComponent(Cookies.RA_ACCESS), encodeURIComponent(access_token), {
					expires: maxAge
				});
				CookiesJS.set(encodeURIComponent(Cookies.RA_REFRESH), encodeURIComponent(refresh_token), {
					expires: maxAge
				});
				localStorage.setItem(LocalStorage.RA_USER, JSON.stringify(USER));
				return Promise.resolve();
			})
			.catch((e: unknown) =>
				Promise.reject(
					new HttpError('Error', 401, {
						message: e.message
					})
				)
			)
	);
};

export default getAuth;
