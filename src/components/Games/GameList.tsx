import debounce from 'debounce';
import { map } from 'ramda';
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';
import styled from '../../common/theme';
import { Game as GameType } from '../../common/types';
import Input from '../Input';
import Link from '../Link';
import Game from './Game';
import { filterGames } from './service';

type Props = {
	games: GameType[];
};

type SearchParams = {
	search: string;
};

const SearchBox = styled.div(({ theme }) => ({
	marginBottom: theme.spacings.large,
}));

const NoGamesFound = styled.div(({ theme }) => ({}));
const ContributionHint = styled.small(({ theme }) => ({}));

const initialParams: SearchParams = { search: '' };

export default function GameList({ games }: Props) {
	const hookResult = useUrlSearchParams(initialParams, { search: String });
	const urlParams = hookResult[0] as SearchParams;
	const [search, setSearchState] = useState<string>(urlParams.search);
	const setUrlParams = hookResult[1];
	const setUrlParamsDebounced = debounce(
		(params: SearchParams) => setUrlParams(params),
		200,
	);
	const setSearch = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const searchTerm = event.target.value;
			setSearchState(searchTerm);
			setUrlParamsDebounced({ search: searchTerm });
		},
		[setSearchState, setUrlParamsDebounced],
	);
	const resetSearch = useCallback(
		event => {
			// Prevent link/navigation.
			event.preventDefault();
			setSearchState('');
			setUrlParamsDebounced({ search: '' });
		},
		[setSearchState, setUrlParamsDebounced],
	);
	const filteredGames = useMemo(() => filterGames(games, { search }), [
		games,
		search,
	]);
	return (
		<>
			<SearchBox>
				<Input
					value={search}
					onChange={setSearch}
					placeholder="🔍 Search for games…"
				/>
			</SearchBox>
			{map(
				game => (
					<Game key={game.id} game={game} />
				),
				filteredGames,
			)}
			{!filteredGames.length && (
				<NoGamesFound>
					Sorry, there are no games matching your current search. Try{' '}
					<Link href="/" onClick={resetSearch}>
						resetting the search
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
