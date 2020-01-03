import React from 'react';
import styled from '../../../common/theme';

type Props = {
	count: number;
};

const Content = styled.small(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	color: theme.colors.grey,
}));

export default function ResultsCount({ count }: Props) {
	return (
		<Content>
			{count} {count === 1 ? 'game' : 'games'} found
		</Content>
	);
}
