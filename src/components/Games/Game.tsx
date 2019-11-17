import React from 'react';
import { Game as GameType } from '../../common/types';
import styled from '../../common/theme';
import { map } from 'ramda';

type Props = { game: GameType };

const Container = styled.div(({ theme }) => ({
	display: 'flex',
	padding: theme.spacings.default,
	marginBottom: theme.spacings.default,
	border: `1px solid ${theme.colors.lightGrey}`,
	borderRadius: theme.spacings.borderRadius,
}));

const CoverContainer = styled.div<{ size?: string }>(
	({ theme, size = '50px' }) => ({
		width: size,
		height: size,
		marginRight: theme.spacings.default,
		borderRadius: theme.spacings.borderRadius,
		backgroundColor: theme.colors.lightGrey,
	}),
);

const Name = styled.span(({ theme }) => ({
	fontSize: theme.fontSizes.large,
	fontWeight: theme.fontWeights.bold,
}));

const Genre = styled.small(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	backgroundColor: theme.colors.lightGrey,
	borderRadius: theme.fontSizes.small,
	padding: `${theme.spacings.small} ${theme.spacings.default}`,
	marginRight: theme.spacings.default,
}));

export default function Game({ game }: Props) {
	return (
		<Container>
			<CoverContainer></CoverContainer>
			<div>
				<Name>{game.name}</Name>
				<br />
				{map(
					genre => (
						<Genre key={genre} title={`Genre: ${genre}`}>
							{genre}
						</Genre>
					),
					game.genres,
				)}
			</div>
		</Container>
	);
}
