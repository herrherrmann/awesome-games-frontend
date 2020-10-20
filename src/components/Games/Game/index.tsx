import { map } from 'ramda';
import React, { useCallback } from 'react';
import styled from '../../../common/theme';
import { Game as GameType } from '../../../common/types';
import Link from '../../Link';
import gamePadIcon from './gamepad.svg';

type Props = { game: GameType };

type GameCardProps = {
	hasLink: boolean;
};

const GameCard = styled.div<GameCardProps>(({ hasLink, theme }) => ({
	backgroundColor: theme.colors.cardBackground,
	display: 'flex',
	[`@media (max-width: ${theme.widths.smallScreen})`]: {
		flexWrap: 'wrap',
	},
	justifyContent: 'space-between',
	padding: theme.spacings.default,
	marginBottom: theme.spacings.default,
	border: `1px solid ${theme.colors.greyLight}`,
	borderRadius: theme.spacings.borderRadius,
	'&:hover': hasLink
		? {
				cursor: 'pointer',
				border: `1px solid ${theme.colors.grey}`,
		  }
		: {},
	'&:focus': hasLink
		? {
				border: `1px solid ${theme.colors.primary}`,
				boxShadow: `0 0 0 1px ${theme.colors.primary}`,
		  }
		: {},
}));

const NameContainer = styled.div(({ theme }) => ({
	display: 'flex',
}));

const CoverContainer = styled.div<{ size?: string }>(({ theme, size = '43px' }) => ({
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
	backgroundColor: theme.colors.greyLight,
}));

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
	margin: 0,
	minWidth: '150px',
}));

const Genres = styled.div(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
}));

const Pillbox = styled.small(({ theme }) => ({
	borderRadius: theme.fontSizes.small,
	padding: `${theme.spacings.small} ${theme.spacings.default}`,
	marginRight: theme.spacings.default,
	marginTop: theme.spacings.default,
}));

const Genre = styled(Pillbox)(({ theme }) => ({
	backgroundColor: theme.colors.greyLight,
}));

const FreeBadge = styled(Pillbox)(({ theme }) => ({
	backgroundColor: theme.colors.greenLight,
}));

const GameLinks = styled.div(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	minWidth: '130px',
}));

const ButtonLink = styled(Link)(({ theme }) => ({
	color: theme.colors.text,
	border: `1px solid ${theme.colors.greyLight}`,
	borderRadius: theme.spacings.borderRadius,
	padding: theme.spacings.default,
	'& + &': {
		marginLeft: theme.spacings.default,
	},
	'&:hover': {
		color: theme.colors.text,
		border: `1px solid ${theme.colors.grey}`,
		textDecoration: 'none',
	},
	'&:focus': {
		border: `1px solid ${theme.colors.primary}`,
		boxShadow: `0 0 0 1px ${theme.colors.primary}`,
	},
}));

export default function Game({ game }: Props) {
	const link = game.links.website || game.links.igdb;
	const handleClick = useCallback(() => {
		if (!!link) {
			window.open(link, '_blank');
		}
	}, [link]);
	const preventBubbling = useCallback((event) => {
		event.stopPropagation();
	}, []);
	return (
		<GameCard
			onClick={handleClick}
			hasLink={!!link}
			tabIndex={link ? 0 : undefined}
			role={link ? 'link' : undefined}
			aria-label={link ? `${game.name}'s website` : undefined}
		>
			<NameContainer>
				<CoverContainer>
					{game.coverUrl ? (
						<Cover src={game.coverUrl} alt="Game cover art" />
					) : (
						<CoverPlaceholder src={gamePadIcon} alt="" />
					)}
				</CoverContainer>
				<div>
					<Name>{game.name}</Name>
					<Genres>
						{game.isFree && <FreeBadge>Free</FreeBadge>}
						{map(
							(genre) => (
								<Genre key={genre}>{genre}</Genre>
							),
							game.genres,
						)}
					</Genres>
				</div>
			</NameContainer>
			<GameLinks>
				{game.links.website && (
					<ButtonLink onClick={preventBubbling} openInNewTab href={game.links.website}>
						Website
					</ButtonLink>
				)}
				{game.links.igdb && (
					<ButtonLink onClick={preventBubbling} openInNewTab href={game.links.igdb}>
						IGDB
					</ButtonLink>
				)}
				{game.links.steam && (
					<ButtonLink onClick={preventBubbling} openInNewTab href={game.links.steam}>
						Steam
					</ButtonLink>
				)}
			</GameLinks>
		</GameCard>
	);
}
