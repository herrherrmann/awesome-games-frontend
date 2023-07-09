import React from 'react';
import { IoLogoGameControllerB } from 'react-icons/io';
import styled from '@emotion/styled';
import Link from './Link';

const Header = styled.header(({ theme }) => ({
	backgroundColor: theme.colors.primary,
	color: theme.colors.background,
	padding: `${theme.spacings.large} 0`,
	marginBottom: theme.spacings.default,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeights.bold,
	boxShadow: `0px 3px 5px -3px rgba(0, 0, 0, 0.25)`,
}));

const HeaderInner = styled.div(({ theme }) => ({
	display: 'flex',
	maxWidth: theme.widths.maxContentWidth,
	margin: '0 auto',
	padding: `0 ${theme.spacings.default}`,
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
	marginRight: theme.spacings.default,
}));

const TextBlock = styled.div`
	display: flex;
	flex-flow: column;
`;

const HeaderLink = styled(Link)(({ theme }) => ({
	color: theme.colors.background,
	'&:hover, &:focus': {
		color: theme.colors.background,
		textDecoration: 'underline',
	},
}));

const Subtitle = styled.small(({ theme }) => ({
	color: theme.colors.background,
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
