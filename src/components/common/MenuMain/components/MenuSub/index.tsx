import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';
import { useSidebarState } from 'react-admin';
import { TSubMenu } from '../../../../../types';

const MenuSub = (props: TSubMenu) => {
	const { isDropdownOpen = false, primaryText, leftIcon, children } = props;
	const [isOpen, setIsOpen] = useState(isDropdownOpen);
	const [open] = useSidebarState();

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<ListItem
				button
				dense
				onClick={handleToggle}
				sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
			>
				{isOpen ? <ExpandMoreIcon /> : leftIcon}
				<ListItemText
					disableTypography
					inset
					primary={primaryText}
					sx={{ color: 'rgba(0, 0, 0, 0.6)', paddingLeft: 2 }}
				/>
			</ListItem>
			<Collapse
				in={isOpen}
				timeout="auto"
				unmountOnExit
			>
				<List
					component="div"
					disablePadding
					sx={
						open
							? {
									paddingLeft: '25px',
									transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
							  }
							: {
									paddingLeft: 0,
									transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
							  }
					}
				>
					{children}
				</List>
			</Collapse>
		</>
	);
};

export default MenuSub;
