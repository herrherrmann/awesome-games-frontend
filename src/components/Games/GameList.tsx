import { map } from 'ramda';
import React, { MouseEventHandler } from 'react';
import styled from '../../common/theme';
import { Game as GameType } from '../../common/types';
import Link from '../Link';
import Game from './Game';

type Props = {
	games: GameType[];
	onResetFilters: MouseEventHandler<HTMLAnchorElement>;
};

const NoGamesFound = styled.div(({ theme }) => ({}));
const ContributionHint = styled.small(({ theme }) => ({}));

export default function GameList({ games, onResetFilters }: Props) {
	return (
		<>
			{map(
				game => (
					<Game key={game.id} game={game} />
				),
				games,
			)}
			{!games.length && (
				<NoGamesFound>
					Sorry, there are no games matching your current filters. Try{' '}
					<Link href="/" onClick={onResetFilters}>
						resetting the filters
					</Link>
					.
					<br />
					<ContributionHint>
						And if you think a game is missing, please consider{' '}
						<Link
							href="https://github.com/herrherrmann/awesome-lan-party-games"
							openInNewTab
						>
							contributing
						</Link>
						!
					</ContributionHint>
				</NoGamesFound>
			)}
		</>
	);
}
