import React from 'react';
import styled from '../../common/theme';
import LoadingSpinner from '../LoadingSpinner';

const Loading = styled.div(({ theme }) => ({
	padding: theme.spacings.default,
	fontSize: theme.fontSizes.large,
	textAlign: 'center',
}));

export default function LoadingPending() {
	return (
		<Loading>
			<LoadingSpinner /> Loading games…
		</Loading>
	);
}
