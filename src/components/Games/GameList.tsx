import { map } from 'ramda';
import React, { MouseEventHandler } from 'react';
import styled from '../../common/theme';
import { Game as GameType } from '../../common/types';
import Link from '../Link';
import LinkWithOnClick from '../LinkWithOnClick';
import Game from './Game';

type Props = {
	games: GameType[];
	onResetFilters: MouseEventHandler<HTMLAnchorElement>;
};

const NoGamesFound = styled.p(({ theme }) => ({ margin: 0 }));

export default function GameList({ games, onResetFilters }: Props) {
	return (
		<>
			{map(
				(game) => (
					<Game key={game.id} game={game} />
				),
				games,
			)}
			{!games.length && (
				<div>
					<NoGamesFound>No games match your filters.</NoGamesFound>
					<small>
						<LinkWithOnClick onClick={onResetFilters}>
							Reset Filters
						</LinkWithOnClick>{' '}
						|{' '}
						<Link
							href="https://github.com/herrherrmann/awesome-lan-party-games"
							openInNewTab
						>
							Add a missing game
						</Link>
					</small>
				</div>
			)}
		</>
	);
}
