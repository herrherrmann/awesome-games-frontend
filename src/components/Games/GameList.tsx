import debounce from 'debounce';
import { map } from 'ramda';
import React, { ChangeEvent, useCallback, useState, useMemo } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';
import styled from '../../common/theme';
import { Game as GameType } from '../../common/types';
import Input from '../Input';
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

const initialParams: SearchParams = { search: '' };

export default function GameList({ games }: Props) {
	const hookResult = useUrlSearchParams(initialParams, { search: String });
	const urlParams = hookResult[0] as SearchParams;
	const [search, setSearch] = useState<string>(urlParams.search);
	const setUrlParams = hookResult[1];
	const setUrlParamsDebounced = debounce(
		(params: SearchParams) => setUrlParams(params),
		200,
	);
	const setSearch5000 = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const searchTerm = event.target.value;
			setSearch(searchTerm);
			setUrlParamsDebounced({ search: searchTerm });
		},
		[setSearch, setUrlParamsDebounced],
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
					onChange={setSearch5000}
					placeholder="🔍 Search for games…"
				/>
			</SearchBox>
			{map(
				game => (
					<Game key={game.id} game={game} />
				),
				filteredGames,
			)}
		</>
	);
}
