import { CreateParams, GetListParams, GetManyParams, GetOneParams } from 'react-admin';
import { TQuestion } from '../../questions';

export type TData = {
	data: {
		id: unknown;
	};
};

export type TDataGenerated = {
	data: TQuestion[];
	total: number;
};

export type TDataJsonQuestion = {
	readonly id: number;
	readonly question: string;
	readonly type: string;
	readonly require: boolean;
};

export type TDataJson = {
	readonly status: boolean;
	readonly data: {
		readonly id: number;
		readonly type: string;
		readonly questions: TDataJsonQuestion[];
	};
};

export type TQueries = {
	readonly resource: string;
	readonly params?: CreateParams | GetListParams | GetManyParams | GetOneParams;
};
