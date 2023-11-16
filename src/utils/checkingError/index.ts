import { TCheckingError, TErrorAuth } from '../../types';
// prettier-ignore
const checkingError = (error: TErrorAuth, type: string): TCheckingError => {
	const message =
		typeof error === 'string'
			? error
			: typeof error === 'undefined' || !error.message
				? 'ra.auth.sign_in_error'
				: error.message;

  const options = {
    messageArgs: {
      _:
        typeof error === 'string'
          ? error
          : error && error.message
            ? error.message
            : undefined
    },
    type
  };

	return { message, options };
};

export default checkingError;
