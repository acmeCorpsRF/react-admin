import { useEffect, useState } from 'react';
import { Button, CardActions, CircularProgress } from '@mui/material';
import { useLogin, useNotify } from 'ra-core';
import { Login } from 'react-admin';
import { AGIS_URL, LOCATION, SEARCH, STRING_PATTERN } from '../../../constants';
import { LocalStorage } from '../../../enum';
import { TErrorAuth } from '../../../types';
import { checkingError } from '../../../utils';
import { Loader } from '../../common';

const LogIn = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [registeredWithAGIS, setRegisteredWithAGIS] = useState<boolean>(false);

	const login = useLogin();
	const notify = useNotify();

	const handlerLogin = () => {
		setLoading(true);
		if (registeredWithAGIS) {
			login({})
				.catch((error: TErrorAuth) => {
					const { message, options } = checkingError(error, 'error');
					notify(message, options);
				})
				.finally(() => setLoading(false));
		} else {
			LOCATION.href = AGIS_URL;
		}
	};

	const clearBrowserHistory = () => {
		window.history.replaceState({}, window.document.title, window.location.origin);
	};

	useEffect(() => {
		if (!localStorage.getItem(LocalStorage.RA_USER) && STRING_PATTERN.test(SEARCH)) {
			setRegisteredWithAGIS(true);
			clearBrowserHistory();
		}
	}, []);

	return (
		<div className="login-page">
			<div className="login-page__block">
				<div className="login-page__content">
					<Login>
						{registeredWithAGIS && <Loader text="Authorization in progress..." />}
						<CardActions>
							<Button
								color="primary"
								disabled={loading}
								fullWidth
								onClick={handlerLogin}
								size="large"
								type="submit"
								variant="contained"
							>
								{loading && (
									<CircularProgress
										sx={{ marginRight: 1 }}
										size={18}
										thickness={2}
									/>
								)}
								{registeredWithAGIS ? 'Login to the application' : 'Please log in AGIS'}
							</Button>
						</CardActions>
					</Login>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
