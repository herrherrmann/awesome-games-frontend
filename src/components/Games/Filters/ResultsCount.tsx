import React from 'react';
import styled from '@emotion/styled';

type Props = {
	count: number;
};

const Content = styled.small(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	color: theme.colors.greyDark,
}));

export default function ResultsCount({ count }: Props) {
	return (
		<Content>
			{count} {count === 1 ? 'game' : 'games'} found
		</Content>
	);
}
