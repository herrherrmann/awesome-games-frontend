import React, { PropsWithChildren } from 'react';
import styled from '../common/theme';

type Props = {};

const headerHeight = '55px';

const Body = styled.header(({ theme }) => ({
	maxWidth: theme.widths.maxContentWidth,
	minHeight: `calc(100vh - ${headerHeight})`,
	margin: '0 auto',
	padding: theme.spacings.default,
}));

export default function AppBody({ children }: PropsWithChildren<Props>) {
	return <Body>{children}</Body>;
}
