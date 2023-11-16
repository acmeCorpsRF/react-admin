import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { TLink } from '../../../types';

const UrlField: React.FC = (props: TLink): JSX.Element => {
	const { source } = props;
	const record = useRecordContext();

	if (record) {
		return (
			<Link
				href={record[source].link}
				sx={{ textDecoration: 'none' }}
				target="_blank"
			>
				{record[source].link}
				<LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
			</Link>
		);
	}
};

export default UrlField;
