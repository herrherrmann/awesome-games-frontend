import { map } from 'ramda';
import React from 'react';
import styled from '../../common/theme';
import { Game as GameType } from '../../common/types';
import Link from '../Link';

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
		minWidth: size,
		width: size,
		height: size,
		minHeight: size,
		marginRight: theme.spacings.default,
		borderRadius: theme.spacings.borderRadius,
		backgroundColor: theme.colors.lightGrey,
	}),
);

const Name = styled.h3(({ theme }) => ({
	fontSize: theme.fontSizes.default,
	fontWeight: theme.fontWeights.bold,
	wordBreak: 'break-all',
	margin: `0 0 ${theme.spacings.default} 0`,
}));

const Genres = styled.div(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	fontSize: theme.fontSizes.small,
}));

const Genre = styled.small(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	backgroundColor: theme.colors.lightGrey,
	borderRadius: theme.fontSizes.small,
	padding: `${theme.spacings.small} ${theme.spacings.default}`,
	marginRight: theme.spacings.default,
	marginBottom: theme.spacings.default,
}));

export default function Game({ game }: Props) {
	return (
		<Container>
			<CoverContainer></CoverContainer>
			<div>
				<Name>
					{game.links.website ? (
						<Link
							href={game.links.website}
							target="_blank"
							rel="noopener noreferrer"
						>
							{game.name}
						</Link>
					) : (
						game.name
					)}
				</Name>
				<Genres>
					{map(
						genre => (
							<Genre key={genre} title={`Genre: ${genre}`}>
								{genre}
							</Genre>
						),
						game.genres,
					)}
				</Genres>
			</div>
		</Container>
	);
}
