import { DataProvider } from 'ra-core/src/types';
import { CreateParams, GetListParams, GetManyParams, GetOneParams } from 'react-admin';
import { getDataList, getDataMany, getMocks, getOneQuestion, questionCreate } from '../../queries';

const dataProvider: DataProvider = {
	create: (resource: string, params: CreateParams) => questionCreate({ params, resource }),
	// create a record

	delete: () => Promise.resolve({ data: { id: 99999 } }), // return fake data for type dataProvider
	// delete a record by id

	deleteMany: () => Promise.resolve({ data: [99999] }), // return fake data for type dataProvider
	// delete a list of records based on an array of ids

	getList: (resource: string, params: GetListParams) => {
		if (['projects', 'questionnaires', 'requires', 'types'].includes(resource)) {
			return getMocks({ params, resource });
		} else {
			return getDataList({ params, resource });
		}
	}, // get a list of records based on sort, filter, and pagination

	getMany: (resource: string, params: GetManyParams) => {
		if (['projects', 'questionnaires', 'requires', 'types'].includes(resource)) {
			return getMocks({ params, resource });
		} else {
			return getDataMany({ params, resource });
		}
	}, // get a list of records based on an array of ids

	getManyReference: () => Promise.resolve({ data: [{ id: 99999 }] }), // return fake data for type dataProvider
	// get the records referenced to another record, e.g. comments for a post

	getOne: (resource: string, params: GetOneParams) => getOneQuestion({ params, resource }), // get a single record by id

	update: () => Promise.resolve({ data: { id: 99999 } }), // return fake data for type dataProvider
	// update a record based on a patch

	updateMany: () => Promise.resolve({ data: [99999] }) // return fake data for type dataProvider
	// update a list of records based on an array of ids and a common patch
};

export default dataProvider;
