import { Card, CardContent, CardHeader } from '@mui/material';
import { Title } from 'react-admin';

const Dashboard = () => (
	<Card className="dashboard">
		<Title title="Dashboard" />
		<CardHeader title="Welcome to the administration" />
		<CardContent>This is the Dashboard for the NPS microservice</CardContent>
	</Card>
);

export default Dashboard;
