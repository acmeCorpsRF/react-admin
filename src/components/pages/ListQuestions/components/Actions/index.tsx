import {
	CreateButton,
	ExportButton,
	FilterButton,
	SelectColumnsButton,
	TopToolbar
} from 'react-admin';

const Actions = () => (
	<TopToolbar>
		<FilterButton />
		<CreateButton />
		<SelectColumnsButton />
		<ExportButton />
	</TopToolbar>
);

export default Actions;
