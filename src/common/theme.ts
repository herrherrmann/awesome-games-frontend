import styled, { CreateStyled } from '@emotion/styled';

type ColorScheme = 'dark' | 'light';

export type Theme = {
	colors: {
		background: string;
		text: string;
		grey: string;
		lightGrey: string;
		lightGreen: string;
		primary: string;
		primaryHighlight: string;
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
	maxContentWidth: '800px',
};

const themes: Record<ColorScheme, Theme> = {
	light: {
		colors: {
			background: '#f2f2f2',
			text: '#333333',
			grey: '#ccc7cb',
			lightGrey: '#e5e0e4',
			lightGreen: '#9bff66',
			primary: '#00a4e5',
			primaryHighlight: '#008ac1',
			secondary: '#81f4e1',
			error: '#ff729f',
		},
		spacings,
		fontSizes,
		fontWeights,
		widths,
	},
	dark: {
		colors: {
			// TODO
			background: '#f2f2f2',
			text: '#333333',
			grey: '#ccc7cb',
			lightGrey: '#d3c4d1',
			lightGreen: '#9bff66',
			primary: '#56cbf9',
			primaryHighlight: '#009bd8',
			secondary: '#81f4e1',
			error: '#ff729f',
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
