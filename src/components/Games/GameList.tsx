import styled from '@emotion/styled';
import { MouseEventHandler } from 'react';
import { Game as GameType } from '../../common/types';
import ButtonUnstyled from '../ButtonUnstyled';
import Link from '../Link';
import Game from './Game';

type Props = {
	games: GameType[];
	onResetFilters: MouseEventHandler<HTMLButtonElement>;
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
						<ButtonUnstyled onClick={onResetFilters}>Reset Filters</ButtonUnstyled> |{' '}
						<Link href="https://github.com/herrherrmann/awesome-multiplayer-games" openInNewTab>
							Add a missing game
						</Link>
					</small>
				</div>
			)}
		</>
	);
}
