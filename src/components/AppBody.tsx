import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

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
