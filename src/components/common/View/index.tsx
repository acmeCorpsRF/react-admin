import { Layout } from 'react-admin';
import { MenuMain } from '../';
import { TView } from '../../../types';

const View = (props: TView) => (
	<Layout
		{...props}
		menu={MenuMain}
	/>
);

export default View;
