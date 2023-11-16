import { GetListResult } from 'ra-core/src/types';
import { requires, types } from '../../assets/mocks';
import { Projects, Questionnaires } from '../../enum';
import { TQueries } from '../../types';

const getMocks = (options: TQueries): Promise<GetListResult> => {
	const { resource } = options;
	const projects = Object.keys(Projects).map((project: Projects) => ({ id: Projects[project] }));
	const questionnaires = Object.keys(Questionnaires).map((questionnaire: Questionnaires) => ({
		id: Questionnaires[questionnaire]
	}));

	if (resource === 'projects') {
		return Promise.resolve({ data: projects, total: projects.length });
	}
	if (resource === 'questionnaires') {
		return Promise.resolve({ data: questionnaires, total: questionnaires.length });
	}
	if (resource === 'requires') {
		return Promise.resolve({ data: requires, total: requires.length });
	}
	if (resource === 'types') {
		return Promise.resolve({ data: types, total: types.length });
	}
};

export default getMocks;
