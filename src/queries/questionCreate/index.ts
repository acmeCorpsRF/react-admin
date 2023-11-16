import { GetOneParams, HttpError } from 'react-admin';
import { QUESTIONNAIRE_VERSIONS } from '../../constants';
import { TDataGenerated, TDataJson, TQueries, TQuestion } from '../../types';
import { fetchCall, listQuestionsCreate } from '../../utils';

const questionCreate = (options: TQueries): Promise<{ data: GetOneParams }> => {
	const {
		resource,
		params: { data }
	} = options;

	const values = {
		questions: [
			{
				question_text: data.question,
				require: Boolean(data.requireId),
				type: data.typeId
			}
		],
		type: data.questionnaireId
	};

	const resourceSplit: string[] = resource.split('/');

	const generateData = (response: TDataJson): { data: GetOneParams } => {
		const listQuestions: TDataGenerated = listQuestionsCreate(resourceSplit, response);
		const question = listQuestions.data.filter(
			(item: TQuestion) => item.id === Math.floor(Math.random() * (44 - 1 + 1)) + 1
		)[0];

		return { data: question };
	};

	return (
		fetchCall('POST', QUESTIONNAIRE_VERSIONS, values)
			// .then((response: unknown) => response.json())
			.then((response: TDataJson) => Promise.resolve(generateData(response)))
			.catch((e: unknown) =>
				Promise.reject(
					new HttpError('Error', 401, {
						message: e.message
					})
				)
			)
	);
};

export default questionCreate;
