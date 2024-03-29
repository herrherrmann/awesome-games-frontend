import { Global, Theme, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { getCurrentTheme } from '../common/theme';
import AppBody from '../components/AppBody';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';

export default function CustomApp({ Component, pageProps }: AppProps) {
	const [theme] = useState<Theme>(getCurrentTheme());
	return (
		<ThemeProvider theme={theme}>
			<Global
				styles={(theme) => ({
					'*': {
						boxSizing: 'border-box',
					},
					body: {
						margin: 0,
						fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
						color: theme.colors.text,
						WebkitFontSmoothing: 'antialiased',
						MozOsxFontSmoothing: 'grayscale',
						backgroundColor: theme.colors.background,
						fontWeight: theme.fontWeights.normal,
					},
					small: {
						fontSize: theme.fontSizes.small,
					},
					strong: {
						fontWeight: theme.fontWeights.bold,
					},
					'*:focus': {
						outline: 'none',
						boxShadow: `0 0 0 2px ${theme.colors.primary}`,
					},
					'::selection': {
						background: theme.colors.primaryLight /* WebKit/Blink Browsers */,
					},
					'::-moz-selection': {
						background: theme.colors.primaryLight /* Gecko Browsers */,
					},
				})}
			/>
			<AppHeader />
			<AppBody>
				<Component {...pageProps} />
			</AppBody>
			<AppFooter />
		</ThemeProvider>
	);
}
