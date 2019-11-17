import React, { PropsWithChildren } from 'react';
import styled from '../common/theme';

type Props = {};

const Body = styled.header(({ theme }) => ({
	padding: theme.spacings.large,
}));

export default function AppBody({ children }: PropsWithChildren<Props>) {
	return <Body>{children}</Body>;
}
