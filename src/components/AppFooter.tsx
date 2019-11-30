import React from 'react';
import styled from '../common/theme';
import Link from './Link';

const FooterContainer = styled.footer(({ theme }) => ({
	backgroundColor: theme.colors.lightGrey,
	padding: theme.spacings.large,
	fontSize: theme.fontSizes.small,
}));

const Footer = styled.footer(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	maxWidth: theme.widths.maxContentWidth,
	margin: '0 auto',
}));

export default function AppFooter() {
	return (
		<FooterContainer>
			<Footer>
				A hobby project by{' '}
				<Link href="https://herrherrmann.net" openInNewTab>
					Sebastian Herrmann
				</Link>
			</Footer>
		</FooterContainer>
	);
}
