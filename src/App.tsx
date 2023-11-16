import './assets/style/index.scss';
import { Admin, Resource } from 'react-admin';
import { View } from './components/common';
import Dashboard from './components/pages/Dashboard';
import ListQuestions from './components/pages/ListQuestions';
import LogIn from './components/pages/LogIn';
import QuestionCreate from './components/pages/QuestionCreate';
import QuestionShow from './components/pages/QuestionShow';
import { Projects, Questionnaires } from './enum';
import { authProvider, dataProvider } from './providers';

const App = () => (
	<Admin
		authProvider={authProvider}
		dashboard={Dashboard}
		dataProvider={dataProvider}
		disableTelemetry
		layout={View}
		loginPage={LogIn}
		requireAuth
	>
		{Object.keys(Projects).map((project: Projects) =>
			Object.keys(Questionnaires).map((questionnaire: Questionnaires) => (
				<Resource
					create={QuestionCreate}
					key={`${project}_${questionnaire}`}
					list={ListQuestions}
					name={`${Projects[project]}/${Questionnaires[questionnaire]}`}
					show={QuestionShow}
				/>
			))
		)}
	</Admin>
);

export default App;
