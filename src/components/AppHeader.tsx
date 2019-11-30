import React from 'react';
import styled from '../common/theme';
import Link from './Link';

const Header = styled.header(({ theme }) => ({
	backgroundColor: theme.colors.primary,
	color: theme.colors.lightGrey,
	padding: theme.spacings.large,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeights.bold,
}));

const HeaderInner = styled.div(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	maxWidth: theme.widths.maxContentWidth,
	margin: '0 auto',
	padding: theme.spacings.default,
}));

const HeaderLinks = styled.div(({ theme }) => ({
	display: 'grid',
	gridAutoFlow: 'column',
	alignItems: 'start',
	gridGap: theme.spacings.large,
}));

const HeaderLink = styled(Link)(({ theme }) => ({
	color: theme.colors.lightGrey,
	'&:hover': {
		color: theme.colors.lightGrey,
		textDecoration: 'underline',
	},
}));

export default function AppHeader() {
	return (
		<Header>
			<HeaderInner>
				<div>
					<HeaderLink href="/">
						<span role="img" aria-label="Fire!">
							🔥
						</span>{' '}
						Awesome Games
					</HeaderLink>
				</div>
				<HeaderLinks>
					<HeaderLink
						href="https://github.com/herrherrmann/awesome-lan-party-games"
						openInNewTab={true}
					>
						Source
					</HeaderLink>
					<HeaderLink
						href="https://github.com/herrherrmann/awesome-games-frontend"
						openInNewTab={true}
					>
						GitHub
					</HeaderLink>
				</HeaderLinks>
			</HeaderInner>
		</Header>
	);
}
