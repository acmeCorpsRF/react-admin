import { Show, SimpleShowLayout, TextField } from 'react-admin';
import UrlField from '../../common/UrlField';
import Title from './components/Title';

const QuestionShow = () => (
	<Show
		className="question-show"
		title={<Title />}
	>
		<SimpleShowLayout>
			<TextField source="id" />
			<TextField source="question" />
			<TextField source="type" />
			<TextField source="require" />
			<UrlField source="site" />
			<TextField source="questionnaireId" />
		</SimpleShowLayout>
	</Show>
);

export default QuestionShow;
