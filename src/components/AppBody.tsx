import React, { PropsWithChildren } from 'react';
import styled from '../common/theme';

type Props = {};

const roughHeaderAndFooterHeight = '100px';

const Body = styled.main(({ theme }) => ({
	maxWidth: theme.widths.maxContentWidth,
	minHeight: `calc(100vh - ${roughHeaderAndFooterHeight})`,
	margin: '0 auto',
	padding: theme.spacings.default,
}));

export default function AppBody({ children }: PropsWithChildren<Props>) {
	return <Body>{children}</Body>;
}
