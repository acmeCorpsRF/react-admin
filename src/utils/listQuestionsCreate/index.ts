import { ProjectsProduction } from '../../enum';
import { TDataGenerated, TDataJson, TDataJsonQuestion } from '../../types';

const listQuestionsCreate = (resource: string[], response: TDataJson): TDataGenerated => {
	const data = response.data.questions.map((item: TDataJsonQuestion) => ({
		id: item.id,
		question: item.question,
		questionnaireId: `#${response.data.id}`,
		questionnaireName: resource[0],
		questionnaireType: resource[1],
		require: item.require.toString(),
		site: {
			link: ProjectsProduction[resource[0]],
			name: resource[0]
		},
		type: item.type
	}));

	return { data, total: data.length };
};

export default listQuestionsCreate;
