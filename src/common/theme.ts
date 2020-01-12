import styled, { CreateStyled } from '@emotion/styled';

type ColorScheme = 'dark' | 'light';

export type Theme = {
	colors: {
		background: string;
		cardBackground: string;
		text: string;
		grey: string;
		greyLight: string;
		greyDark: string;
		greenLight: string;
		primary: string;
		primaryDark: string;
		primaryLight: string;
		secondary: string;
		error: string;
	};
	spacings: {
		small: string;
		default: string;
		large: string;
		huge: string;
		borderRadius: string;
	};
	widths: {
		smallScreen: string;
		maxContentWidth: string;
	};
	fontSizes: {
		small: string;
		default: string;
		large: string;
	};
	fontWeights: {
		normal: number;
		bold: number;
	};
};

export default styled as CreateStyled<Theme>;

const spacings = {
	small: '2px',
	default: '5px',
	large: '10px',
	huge: '20px',
	borderRadius: '5px',
};

const fontSizes = {
	small: '12px',
	default: '15px',
	large: '18px',
};

const fontWeights = {
	normal: 400,
	bold: 600,
};

const widths = {
	smallScreen: '600px',
	maxContentWidth: '800px',
};

// Palette: https://flatuicolors.com/palette/defo
const themes: Record<ColorScheme, Theme> = {
	light: {
		colors: {
			background: '#ecf0f1',
			cardBackground: '#ffffff',
			text: '#333333',
			grey: '#ccc7cb',
			greyLight: '#e3e6ea',
			greyDark: '#7f8c8d',
			greenLight: '#a4e500',
			primary: '#9b59b6',
			primaryDark: '#8e44ad',
			primaryLight: '#ebd4f4',
			secondary: '#81f4e1',
			error: '#e74c3c',
		},
		spacings,
		fontSizes,
		fontWeights,
		widths,
	},
	dark: {
		colors: {
			// TODO
			background: '#ecf0f1',
			cardBackground: '#ffffff',
			text: '#333333',
			grey: '#ccc7cb',
			greyLight: '#e3e6ea',
			greyDark: '#7f8c8d',
			greenLight: '#a4e500',
			primary: '#9b59b6',
			primaryDark: '#8e44ad',
			primaryLight: '#ebd4f4',
			secondary: '#81f4e1',
			error: '#e74c3c',
		},
		spacings,
		fontSizes,
		fontWeights,
		widths,
	},
};

export function getCurrentTheme(): Theme {
	// Only 'light' supported for now.
	return themes['light'];
}

export function getColorScheme(): ColorScheme | null {
	const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
		.matches;
	if (isDarkMode) {
		return 'dark';
	}
	const isLightMode = window.matchMedia('(prefers-color-scheme: light)')
		.matches;
	if (isLightMode) {
		return 'light';
	}
	return null;
	// window
	// 	.matchMedia('(prefers-color-scheme: dark)')
	// 	.addListener(e => e.matches && activateDarkMode());
	// window
	// 	.matchMedia('(prefers-color-scheme: light)')
	// 	.addListener(e => e.matches && activateLightMode());
	// if (isNotSpecified || hasNoSupport) {
	// 	now = new Date();
	// 	hour = now.getHours();
	// 	if (hour < 4 || hour >= 16) {
	// 		activateDarkMode();
	// 	}
	// }
}
