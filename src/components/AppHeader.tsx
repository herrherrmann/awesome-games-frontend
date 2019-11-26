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
}));

const Links = styled.div(({ theme }) => ({
	display: 'grid',
	gridAutoFlow: 'column',
	gridGap: theme.spacings.large,
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
				<Links>
					<Link
						href="https://github.com/herrherrmann/awesome-lan-party-games"
						target="_blank"
						rel="noopener noreferrer"
					>
						Source
					</Link>
					<Link
						href="https://github.com/herrherrmann/awesome-games-frontend"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</Link>
				</Links>
			</HeaderInner>
		</Header>
	);
}
