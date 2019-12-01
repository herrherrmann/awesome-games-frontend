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
	flexFlow: 'column',
	maxWidth: theme.widths.maxContentWidth,
	margin: '0 auto',
}));

const HeaderLink = styled(Link)(({ theme }) => ({
	color: theme.colors.lightGrey,
	'&:hover': {
		color: theme.colors.lightGrey,
		textDecoration: 'underline',
	},
}));

const Subtitle = styled.small(({ theme }) => ({
	color: theme.colors.lightGrey,
}));

export default function AppHeader() {
	return (
		<Header>
			<HeaderInner>
				<HeaderLink href="/">
					<span role="img" aria-label="Fire!">
						🔥
					</span>{' '}
					Awesome Games
				</HeaderLink>
				<Subtitle>…for your couch session or LAN party.</Subtitle>
			</HeaderInner>
		</Header>
	);
}
