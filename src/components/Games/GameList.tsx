import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { Game as GameType } from '../../common/types';
import Link from '../Link';
import LinkWithOnClick from '../LinkWithOnClick';
import Game from './Game';

type Props = {
	games: GameType[];
	onResetFilters: MouseEventHandler<HTMLAnchorElement>;
};

const NoGamesFound = styled.p(() => ({ margin: 0 }));

export default function GameList({ games, onResetFilters }: Props) {
	return (
		<>
			{games.map((game) => (
				<Game key={game.id} game={game} />
			))}
			{!games.length && (
				<div>
					<NoGamesFound>No games match your filters.</NoGamesFound>
					<small>
						<LinkWithOnClick onClick={onResetFilters}>Reset Filters</LinkWithOnClick> |{' '}
						<Link href="https://github.com/herrherrmann/awesome-multiplayer-games" openInNewTab>
							Add a missing game
						</Link>
					</small>
				</div>
			)}
		</>
	);
}
