import CookiesJS from 'js-cookie';
import { AuthProvider } from 'react-admin';
import { Cookies, LocalStorage } from '../../enum';
import { getAuth } from '../../queries';

const authProvider: AuthProvider = {
	checkAuth: () =>
		localStorage.getItem(LocalStorage.RA_USER) ? Promise.resolve() : Promise.reject(),

	checkError: () => Promise.resolve(),

	getIdentity: () => {
		const persistedUser = localStorage.getItem(LocalStorage.RA_USER);
		const user = persistedUser ? JSON.parse(persistedUser) : null;

		return Promise.resolve(user);
	},

	getPermissions: () => Promise.resolve(undefined),

	login: () => getAuth(),

	logout: () => {
		localStorage.removeItem(LocalStorage.RA_USER);
		CookiesJS.remove(Cookies.RA_ACCESS);
		CookiesJS.remove(Cookies.RA_REFRESH);

		return Promise.resolve();
	}
};

export default authProvider;
