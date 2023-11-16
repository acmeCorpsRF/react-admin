export type TAuthFormData = {
	readonly client_id: string;
	readonly client_secret: string;
	readonly code: string;
	readonly grant_type: string;
	readonly redirect_uri: string;
};
