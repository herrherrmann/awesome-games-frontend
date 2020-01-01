import debounce from 'debounce';
import React, { useCallback, useMemo, useState } from 'react';
import { useAsync } from 'react-async';
import { useUrlSearchParams } from 'use-url-search-params';
import styled from '../../common/theme';
import LoadingSpinner from '../LoadingSpinner';
import Filters from './Filters';
import GameList from './GameList';
import LoadingError from './LoadingError';
import { filterGames, loadGames } from './service';

const Loading = styled.div(({ theme }) => ({
	padding: theme.spacings.default,
	fontSize: theme.fontSizes.large,
	textAlign: 'center',
}));

const LayoutContainer = styled.div(({ theme }) => ({
	display: 'flex',
}));

const FiltersContainer = styled.div(({ theme }) => ({
	minWidth: '200px',
	marginRight: theme.spacings.large,
}));

const GamesContainer = styled.div(({ theme }) => ({
	// minWidth: '300px',
}));

export type Filters = {
	search: string;
};

const initialParams: Filters = { search: '' };

export default function Games() {
	const { data: games = [], isPending, error } = useAsync(loadGames);
	const hookResult = useUrlSearchParams(initialParams, { search: String });
	const urlParams = hookResult[0] as Filters;
	const [search, setSearchState] = useState<string>(urlParams.search);
	const setUrlParams = hookResult[1];
	const setUrlParamsDebounced = debounce(
		(params: Filters) => setUrlParams(params),
		200,
	);
	const setSearch = useCallback(
		(search: string) => {
			setSearchState(search);
			setUrlParamsDebounced({ search });
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
	if (isPending) {
		return (
			<Loading>
				<LoadingSpinner /> Loading games…
			</Loading>
		);
	}
	if (error) {
		return <LoadingError />;
	}
	return (
		<LayoutContainer>
			<FiltersContainer>
				<Filters
					filters={{ search }}
					setFilters={({ search }) => setSearch(search)}
					resultLength={filteredGames.length}
				/>
			</FiltersContainer>
			<GamesContainer>
				<GameList games={filteredGames} onResetSearch={resetSearch} />
			</GamesContainer>
		</LayoutContainer>
	);
}
