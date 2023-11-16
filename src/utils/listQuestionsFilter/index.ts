import { TDataGenerated, TFiltersQuestions, TQuestion } from '../../types';

const listQuestionsFilter = (
	listQuestions: TDataGenerated,
	values: TFiltersQuestions
): TDataGenerated => {
	const { field, order, page, perPage, require, search, type } = values;

	let filteredQuestions: TQuestion[] = listQuestions.data;
	const resultFilteredQuestions: Array<TQuestion[]> = [];

	if (require) {
		filteredQuestions = filteredQuestions.filter((item: TQuestion) => item.require === require);
	}
	if (search) {
		filteredQuestions = filteredQuestions.filter((item: TQuestion) => {
			const itemQuestion = item.question.toLowerCase();
			const searchText = search.toLowerCase().trim();

			return itemQuestion.includes(searchText);
		});
	}
	if (type) {
		filteredQuestions = filteredQuestions.filter((item: TQuestion) => item.type === type);
	}
	filteredQuestions = filteredQuestions.sort((a: TQuestion, b: TQuestion) => {
		if (field === 'id' && order === 'ASC') {
			return a[field] - b[field];
		}
		if (field === 'id' && order === 'DESC') {
			return b[field] - a[field];
		}
		if ((field === 'question' || field === 'require' || field === 'type') && order === 'ASC') {
			if (a[field][0].toLowerCase() < b[field][0].toLowerCase()) {
				return -1;
			}
		}
		if ((field === 'question' || field === 'require' || field === 'type') && order === 'DESC') {
			if (b[field][0].toLowerCase() < a[field][0].toLowerCase()) {
				return -1;
			}
		}
		return 0;
	});

	if (filteredQuestions.length) {
		for (let i = 0; i < filteredQuestions.length; i += perPage) {
			resultFilteredQuestions.push(filteredQuestions.slice(i, i + perPage));
		}
	} else {
		resultFilteredQuestions.push([]);
	}

	return { data: resultFilteredQuestions[page - 1], total: filteredQuestions.length };
};

export default listQuestionsFilter;
