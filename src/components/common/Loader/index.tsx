import './index.scss';
import React from 'react';
import { TLoader } from '../../../types';

const Loader: React.FC = (props: TLoader) => {
	const { text } = props;

	return (
		<div className="loader">
			<div className="loader__block">
				<div className="loader__content">
					<div className="loader__self" />
					{text && <span className="loader__text">{text}</span>}
				</div>
			</div>
		</div>
	);
};

export default Loader;
