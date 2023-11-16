import { GetListResult } from 'ra-core/src/types';
import { HttpError } from 'react-admin';
import { QUESTIONNAIRE_VERSIONS } from '../../constants';
import { TDataGenerated, TDataJson, TQueries } from '../../types';
import { fetchCall, listQuestionsCreate, listQuestionsFilter } from '../../utils';

const getDataList = (options: TQueries): Promise<Awaited<GetListResult>> => {
	const {
		resource,
		params: {
			filter: { require, search, type },
			pagination: { page, perPage },
			sort: { field, order }
		}
	} = options;
	const resourceSplit: string[] = resource.split('/');
	const query = `project_name=${resourceSplit[0]}&type=${resourceSplit[1]}`;

	const generateData = (response: TDataJson): TDataGenerated => {
		const listQuestions: TDataGenerated = listQuestionsCreate(resourceSplit, response);
		const values = { field, order, page, perPage, require, search, type };

		return listQuestionsFilter(listQuestions, values);
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

export default getDataList;
