import React from 'react';
import styled from '../common/theme';
import Link from './Link';

const Header = styled.header(({ theme }) => ({
	backgroundColor: theme.colors.lightGrey,
	borderBottom: `1px solid ${theme.colors.text}`,
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
	color: theme.colors.text,
	'&:hover': {
		color: theme.colors.text,
	},
}));

export default function AppHeader() {
	return (
		<Header>
			<HeaderInner>
				<div>
					<span role="img" aria-label="Fire!">
						🔥
					</span>{' '}
					<span>Awesome Games</span>
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
