import { Create, ReferenceInput, required, SimpleForm, TextInput } from 'react-admin';
import Title from './components/Title';

const QuestionCreate = () => (
	<Create
		className="question-create"
		title={<Title />}
	>
		<SimpleForm>
			<ReferenceInput
				name="projectId"
				reference="projects"
				source="projectId"
				validate={[required()]}
			/>
			<ReferenceInput
				name="questionnaireId"
				reference="questionnaires"
				source="questionnaireId"
				validate={[required()]}
			/>
			<ReferenceInput
				name="requireId"
				reference="requires"
				source="requireId"
				validate={[required()]}
			/>
			<ReferenceInput
				name="typeId"
				reference="types"
				source="typeId"
				validate={[required()]}
			/>
			<TextInput
				fullWidth
				multiline
				name="question"
				resettable
				rows={5}
				source="question"
				validate={[required()]}
			/>
		</SimpleForm>
	</Create>
);

export default QuestionCreate;
