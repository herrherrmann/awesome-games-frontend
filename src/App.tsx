import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import React, { useState } from 'react';
import { getCurrentTheme, Theme } from './common/theme';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Games from './components/Games';

const App: React.FC = () => {
	const [theme] = useState<Theme>(getCurrentTheme());
	return (
		<ThemeProvider<Theme> theme={theme}>
			<Global<Theme>
				styles={theme => ({
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
				})}
			/>
			<AppHeader />
			<AppBody>
				<Games />
			</AppBody>
			<AppFooter />
		</ThemeProvider>
	);
};

export default App;
