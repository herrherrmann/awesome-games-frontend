import { map } from 'ramda';
import React from 'react';
import styled from '../../../common/theme';
import { Game as GameType } from '../../../common/types';
import Link from '../../Link';
import gamePadIcon from './gamepad.svg';

type Props = { game: GameType };

const Container = styled.div(({ theme }) => ({
	backgroundColor: theme.colors.cardBackground,
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
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: size,
		width: size,
		height: size,
		minHeight: size,
		overflow: 'hidden',
		marginRight: theme.spacings.default,
		borderRadius: theme.spacings.borderRadius,
		backgroundColor: theme.colors.lightGrey,
	}),
);

const Cover = styled.img(() => ({
	width: '100%',
	height: 'auto',
}));

const CoverPlaceholder = styled.img(() => ({
	width: '75%',
	height: 'auto',
	opacity: 0.25,
}));

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

const Pillbox = styled.small(({ theme }) => ({
	fontSize: theme.fontSizes.small,
	borderRadius: theme.fontSizes.small,
	padding: `${theme.spacings.small} ${theme.spacings.default}`,
	marginRight: theme.spacings.default,
	marginBottom: theme.spacings.default,
}));

const Genre = styled(Pillbox)(({ theme }) => ({
	backgroundColor: theme.colors.lightGrey,
}));

const FreeBadge = styled(Pillbox)(({ theme }) => ({
	backgroundColor: theme.colors.lightGreen,
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
		color: theme.colors.text,
		border: `1px solid ${theme.colors.grey}`,
	},
}));

export default function Game({ game }: Props) {
	return (
		<Container>
			<NameContainer>
				<CoverContainer>
					{game.coverUrl ? (
						<Cover src={game.coverUrl} alt="Game cover art" />
					) : (
						<CoverPlaceholder src={gamePadIcon} alt="" />
					)}
				</CoverContainer>
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
						{game.isFree && <FreeBadge>Free</FreeBadge>}
						{map(
							genre => (
								<Genre key={genre}>{genre}</Genre>
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
