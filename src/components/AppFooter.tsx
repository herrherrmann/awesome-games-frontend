import React from 'react';
import styled from '../common/theme';
import Link from './Link';

const Footer = styled.footer(({ theme }) => ({
	backgroundColor: theme.colors.lightGrey,
	padding: theme.spacings.large,
	fontSize: theme.fontSizes.small,
	boxShadow: `inset 0px 3px 5px -3px rgba(0, 0, 0, 0.25)`,
}));

const FooterInner = styled.div(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	flexFlow: 'row wrap',
	width: '100%',
	maxWidth: theme.widths.maxContentWidth,
	padding: `0 ${theme.spacings.default}`,
	margin: '0 auto',
	fontSize: theme.fontSizes.small,
}));

const FooterLink = styled(Link)(() => ({
	marginLeft: '.5em',
}));

export default function AppFooter() {
	return (
		<Footer>
			<FooterInner>
				<div>
					A hobby project by{' '}
					<Link href="https://herrherrmann.net" openInNewTab>
						Sebastian Herrmann
					</Link>
				</div>
				<div>
					<FooterLink
						href="https://github.com/herrherrmann/awesome-lan-party-games"
						openInNewTab={true}
					>
						Source
					</FooterLink>
					<FooterLink
						href="https://github.com/herrherrmann/awesome-games-frontend"
						openInNewTab={true}
					>
						GitHub
					</FooterLink>
				</div>
			</FooterInner>
		</Footer>
	);
}
