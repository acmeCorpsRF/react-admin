import { Theme, useMediaQuery } from '@mui/material';
import { RaRecord } from 'ra-core/src/types';
import { DatagridConfigurable, List, SimpleList, TextField } from 'react-admin';
import Actions from './components/Actions';
import Filters from './components/Filters';
import Title from './components/Title';

const ListQuestions = () => {
	const isSmall = useMediaQuery<Theme>((theme: Theme) => theme.breakpoints.down('sm'));

	return (
		<List
			actions={<Actions />}
			className="list-posts"
			filters={Filters}
			title={<Title />}
		>
			{isSmall ? (
				<SimpleList
					linkType="show"
					primaryText={(record: RaRecord) => record.id}
					secondaryText={(record: RaRecord) => record.question}
					tertiaryText={(record: RaRecord) => record.type}
				/>
			) : (
				<DatagridConfigurable rowClick="show">
					<TextField source="id" />
					<TextField source="question" />
					<TextField source="type" />
					<TextField source="require" />
					<TextField source="site.link" />
					<TextField source="questionnaireId" />
				</DatagridConfigurable>
			)}
		</List>
	);
};

export default ListQuestions;
