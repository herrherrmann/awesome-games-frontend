import React from 'react';
import { IoLogoGameControllerB } from 'react-icons/io';
import styled from '../common/theme';
import Link from './Link';

const Header = styled.header(({ theme }) => ({
	backgroundColor: theme.colors.primary,
	color: theme.colors.lightGrey,
	padding: theme.spacings.large,
	marginBottom: theme.spacings.default,
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeights.bold,
	boxShadow: `0px 3px 5px -3px rgba(0, 0, 0, 0.25)`,
}));

const HeaderInner = styled.div(({ theme }) => ({
	display: 'flex',
	maxWidth: theme.widths.maxContentWidth,
	padding: `0 ${theme.spacings.default}`,
	margin: '0 auto',
}));

const LOGO_SIZE = '36px';

const LogoLink = styled(Link)(({ theme }) => ({
	color: theme.colors.lightGrey,
	'&:hover, &:focus': {
		color: theme.colors.lightGrey,
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
	color: theme.colors.lightGrey,
	'&:hover, &:focus': {
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
				<LogoLink href="/">
					<IoLogoGameControllerB />
				</LogoLink>
				<TextBlock>
					<HeaderLink href="/">Awesome Games</HeaderLink>
					<Subtitle>…for your couch session or LAN party.</Subtitle>
				</TextBlock>
			</HeaderInner>
		</Header>
	);
}
