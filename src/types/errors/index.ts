export type TErrorAuth = string | undefined | { message: string };

export type TCheckingError = {
	message: string;
	options: {
		messageArgs: {
			_: string | undefined;
		};
	};
};
