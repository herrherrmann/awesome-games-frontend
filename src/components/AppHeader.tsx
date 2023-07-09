import React from 'react';
import { IoLogoGameControllerB } from 'react-icons/io';
import styled from '@emotion/styled';
import Link from './Link';

const notATinyPhone = '@media (min-width: 320px)';

const Header = styled.header(({ theme }) => ({
	backgroundColor: theme.colors.primary,
	color: theme.colors.background,
	padding: theme.spacings.large,
	marginBottom: theme.spacings.default,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeights.bold,
	boxShadow: `0px 3px 5px -3px rgba(0, 0, 0, 0.25)`,
}));

const HeaderInner = styled.div(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	maxWidth: theme.widths.maxContentWidth,
	margin: '0 auto',
	[`@media (min-width: ${theme.widths.smallScreen})`]: {
		justifyContent: 'flex-start',
	},
}));

const LOGO_SIZE = '36px';

const LogoLink = styled(Link)(({ theme }) => ({
	color: theme.colors.background,
	'&:hover, &:focus': {
		color: theme.colors.background,
	},
	width: LOGO_SIZE,
	height: LOGO_SIZE,
	fontSize: LOGO_SIZE,
	marginRight: theme.spacings.large,
}));

const TextBlock = styled.div`
	display: flex;
	flex-flow: column;
`;

const HeaderLink = styled(Link)(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	fontWeight: theme.fontWeights.bold,
	color: theme.colors.background,
	'&:hover, &:focus': {
		color: theme.colors.background,
		textDecoration: 'underline',
	},
	[notATinyPhone]: {
		fontSize: theme.fontSizes.default,
	},
}));

const Subtitle = styled.small(({ theme }) => ({
	color: theme.colors.background,
	fontSize: theme.fontSizes.extraSmall,
	[notATinyPhone]: {
		fontSize: theme.fontSizes.small,
	},
}));

export default function AppHeader() {
	return (
		<Header>
			<HeaderInner>
				<LogoLink href="/" aria-hidden="true">
					<IoLogoGameControllerB />
				</LogoLink>
				<TextBlock>
					<HeaderLink href="/">Awesome Multiplayer Games</HeaderLink>
					<Subtitle>For your next couch session or LAN party</Subtitle>
				</TextBlock>
			</HeaderInner>
		</Header>
	);
}
