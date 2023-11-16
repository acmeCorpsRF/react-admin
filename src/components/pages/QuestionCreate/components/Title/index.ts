import { LOCATION } from '../../../../../constants';

const Title = () => {
	const hash = LOCATION.hash;
	const title = hash.substring(hash.indexOf('/') + 1, hash.lastIndexOf('/')).split('/');

	return `${title[0]} --> ${title[1]}`;
};

export default Title;
