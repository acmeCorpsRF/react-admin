import PostIcon from '@mui/icons-material/Book';
import LabelIcon from '@mui/icons-material/Label';
import { Menu } from 'react-admin';
import { Projects, Questionnaires } from '../../../enum';
import MenuSub from './components/MenuSub';

const MenuMain = () => (
	<Menu>
		<Menu.DashboardItem />
		{Object.keys(Projects).map((project: Projects, indexProject: number) => (
			<MenuSub
				key={`${project}_${indexProject}`}
				leftIcon={<PostIcon />}
				primaryText={Projects[project]}
			>
				{Object.keys(Questionnaires).map(
					(questionnaire: Questionnaires, indexQuestionnaire: number) => (
						<Menu.Item
							key={`${project}_${indexQuestionnaire}`}
							leftIcon={<LabelIcon />}
							primaryText={Questionnaires[questionnaire]}
							to={`${Projects[project]}/${Questionnaires[questionnaire]}`}
						/>
					)
				)}
			</MenuSub>
		))}
	</Menu>
);

export default MenuMain;
