import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const roughHeaderAndFooterHeight = '100px';

const Body = styled.main(({ theme }) => ({
	maxWidth: theme.widths.maxContentWidth,
	minHeight: `calc(100vh - ${roughHeaderAndFooterHeight})`,
	margin: '0 auto',
	padding: theme.spacings.large,
}));

export default function AppBody({ children }: PropsWithChildren) {
	return <Body>{children}</Body>;
}
