import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
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
			lineHeight: number;
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
	}
}
