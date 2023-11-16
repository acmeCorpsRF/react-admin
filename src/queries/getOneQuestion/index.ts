import { GetOneParams, HttpError } from 'react-admin';
import { QUESTIONNAIRE_VERSIONS } from '../../constants';
import { TDataGenerated, TDataJson, TQueries, TQuestion } from '../../types';
import { fetchCall, listQuestionsCreate } from '../../utils';

const getOneQuestion = (options: TQueries): Promise<Awaited<{ data: GetOneParams }>> => {
	const {
		resource,
		params: { id }
	} = options;

	const resourceSplit: string[] = resource.split('/');
	const query = `project_name=${resourceSplit[0]}&type=${resourceSplit[1]}`;

	const generateData = (response: TDataJson): { data: GetOneParams } => {
		const listQuestions: TDataGenerated = listQuestionsCreate(resourceSplit, response);
		const question = listQuestions.data.filter((item: TQuestion) => item.id === Number(id))[0];

		return { data: question };
	};

	return (
		fetchCall('GET', `${QUESTIONNAIRE_VERSIONS}?${query}`)
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

export default getOneQuestion;
