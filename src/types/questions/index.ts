export type TQuestion = {
	readonly questionnaireId: string;
	readonly questionnaireName: string;
	readonly questionnaireType: string;
	readonly id: number;
	readonly question: string;
	readonly site: {
		readonly name: string;
		readonly link: string;
	};
	readonly require: string;
	readonly type: string;
};

export type TFiltersQuestions = {
	readonly field: string;
	readonly order: string;
	readonly require: string;
	readonly search: string;
	readonly type: string;
	readonly page: number;
	readonly perPage: number;
};

export type TQuestionCreate = {
	questions: {
		question_text: string;
		require: boolean;
		type: string;
	}[];
	type: string;
};
