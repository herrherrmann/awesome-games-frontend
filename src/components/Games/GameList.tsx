import { map } from 'ramda';
import React from 'react';
import { Game as GameType } from '../../common/types';
import Game from './Game';

type Props = {
	games: GameType[];
};

export default function GameList({ games }: Props) {
	return (
		<>
			{map(
				game => (
					<Game key={game.id} game={game} />
				),
				games,
			)}
		</>
	);
}
