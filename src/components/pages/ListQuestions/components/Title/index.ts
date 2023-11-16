import { LOCATION } from '../../../../../constants';

const Title = () => {
	const hash = LOCATION.hash;
	const condition = hash.includes('?') ? hash.indexOf('?') : hash.length;
	const title = hash.substring(hash.indexOf('/') + 1, condition).split('/');

	return `${title[0]} --> ${title[1]}`;
};

export default Title;
