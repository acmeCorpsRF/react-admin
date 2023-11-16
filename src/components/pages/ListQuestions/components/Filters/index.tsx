import { ReferenceInput, TextInput } from 'react-admin';

const Filters = [
	<TextInput
		alwaysOn
		key="Search"
		label="Search"
		name="search"
		source="search"
	/>,
	<ReferenceInput
		key="Require"
		label="Require"
		name="require"
		reference="requires"
		source="require"
	/>,
	<ReferenceInput
		key="Type"
		label="Type"
		name="type"
		reference="types"
		source="type"
	/>
];

export default Filters;
