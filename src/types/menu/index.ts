import * as React from 'react';

export type TSubMenu = {
	readonly children?: React.ReactNode;
	readonly isDropdownOpen?: boolean;
	readonly leftIcon?: React.ReactElement;
	readonly primaryText?: string;
};
