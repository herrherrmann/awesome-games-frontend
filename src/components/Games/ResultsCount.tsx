import React from 'react';
import styled from '../../common/theme';

type Props = {
	count: number;
};

const Container = styled.div(({ theme }) => ({
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	borderBottom: `1px solid ${theme.colors.grey}`,
	margin: `${theme.spacings.huge} 0`,
}));

const Content = styled.small(({ theme }) => ({
	color: theme.colors.grey,
	position: 'absolute',
	top: '-0.6em',
	padding: `0 ${theme.spacings.default}`,
	backgroundColor: theme.colors.background,
}));

export default function ResultsCount({ count }: Props) {
	return (
		<Container>
			<Content>
				{count} {count === 1 ? 'game' : 'games'} found
			</Content>
		</Container>
	);
}
