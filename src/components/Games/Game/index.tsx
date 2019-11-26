import { map } from 'ramda';
import React from 'react';
import styled from '../../../common/theme';
import { Game as GameType } from '../../../common/types';
import Link from '../../Link';

type Props = { game: GameType };

const Container = styled.div(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	padding: theme.spacings.default,
	marginBottom: theme.spacings.default,
	border: `1px solid ${theme.colors.lightGrey}`,
	borderRadius: theme.spacings.borderRadius,
}));

const NameContainer = styled.div(({ theme }) => ({
	display: 'flex',
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
	minWidth: '150px',
}));

const Genres = styled.div(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
}));

const Genre = styled.small(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	backgroundColor: theme.colors.lightGrey,
	borderRadius: theme.fontSizes.small,
	padding: `${theme.spacings.small} ${theme.spacings.default}`,
	marginRight: theme.spacings.default,
	marginBottom: theme.spacings.default,
}));

const GameLinks = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	minWidth: '150px',
}));

const GameLink = styled(Link)(({ theme }) => ({
	color: theme.colors.text,
	border: `1px solid ${theme.colors.lightGrey}`,
	borderRadius: theme.spacings.borderRadius,
	padding: theme.spacings.default,
	marginRight: theme.spacings.default,
	'&:hover': {
		border: `1px solid ${theme.colors.lightGrey}`,
	},
}));

export default function Game({ game }: Props) {
	return (
		<Container>
			<NameContainer>
				<CoverContainer></CoverContainer>
				<div>
					<Name>
						{game.links.website ? (
							<Link href={game.links.website} openInNewTab>
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
			</NameContainer>
			<GameLinks>
				{game.links.website && (
					<GameLink openInNewTab href={game.links.website}>
						Website
					</GameLink>
				)}
				{game.links.igdb && (
					<GameLink openInNewTab href={game.links.igdb}>
						IGDB
					</GameLink>
				)}
				{game.links.steam && (
					<GameLink openInNewTab href={game.links.steam}>
						Steam
					</GameLink>
				)}
			</GameLinks>
		</Container>
	);
}
