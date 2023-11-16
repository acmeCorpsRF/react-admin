import * as React from 'react';

export type TView = {
	readonly children: React.ReactNode;
	readonly dashboard: unknown;
	readonly menu: unknown;
	readonly title: string;
};
