import styled from '@emotion/styled';
import React, { useCallback } from 'react';
import { Game as GameType } from '../../../common/types';
import Link from '../../Link';

type Props = { game: GameType };

type GameCardProps = {
	hasLink: boolean;
};

const GameCard = styled.div<GameCardProps>(({ hasLink, theme }) => ({
	backgroundColor: theme.colors.cardBackground,
	display: 'flex',
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

const CoverContainer = styled.div<{ size?: string }>(({ theme, size = '43px' }) => ({
	display: 'flex',
	flex: `0 0 ${size}`,
	justifyContent: 'center',
	alignItems: 'center',
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

const NameContainer = styled.div(() => ({
	flex: '1 1 auto',
}));

const Name = styled.h3(({ theme }) => ({
	fontSize: theme.fontSizes.default,
	fontWeight: theme.fontWeights.bold,
	wordBreak: 'break-word',
	margin: `0 ${theme.spacings.default} 0 0`,
}));

const Genres = styled.div(() => ({
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
	alignItems: 'flex-start',
	flex: '0 0 auto',
	paddingTop: theme.spacings.default,
	[`@media (max-width: ${theme.widths.smallScreen})`]: {
		fontSize: theme.fontSizes.small,
	},
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
			<CoverContainer>
				{game.coverUrl ? (
					<Cover src={game.coverUrl} alt="Game cover art" loading="lazy" />
				) : (
					<CoverPlaceholder src="/gamepad.svg" alt="" />
				)}
			</CoverContainer>
			<NameContainer>
				<Name>{game.name}</Name>
				<Genres>
					{game.isFree && <FreeBadge>Free</FreeBadge>}
					{game.genres.map((genre) => (
						<Genre key={genre}>{genre}</Genre>
					))}
				</Genres>
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
