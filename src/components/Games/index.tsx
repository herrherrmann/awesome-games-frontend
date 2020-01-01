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

const EMPTY_FILTERS: Filters = { search: '' };

export default function Games() {
	const { data: games = [], isPending, error } = useAsync(loadGames);
	// Initialize with {} to avoid unneeded params upon initialization.
	const hookResult = useUrlSearchParams({}, { search: String });
	const urlParams = hookResult[0] as Filters;
	const setUrlParams = hookResult[1];
	const setUrlParamsDebounced = debounce(setUrlParams, 200);
	const [filters, setFiltersState] = useState<Filters>(urlParams);
	const setFilters = useCallback(
		(nextFilters: Filters) => {
			setFiltersState(nextFilters);
			setUrlParamsDebounced(nextFilters);
		},
		[setFiltersState, setUrlParamsDebounced],
	);
	const resetSearch = useCallback(
		event => {
			// Prevent link/navigation.
			event.preventDefault();
			setFiltersState(EMPTY_FILTERS);
			setUrlParamsDebounced(EMPTY_FILTERS);
		},
		[setFiltersState, setUrlParamsDebounced],
	);
	const filteredGames = useMemo(() => filterGames(games, filters), [
		games,
		filters,
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
					filters={filters}
					setFilters={setFilters}
					resultLength={filteredGames.length}
				/>
			</FiltersContainer>
			<GamesContainer>
				<GameList games={filteredGames} onResetSearch={resetSearch} />
			</GamesContainer>
		</LayoutContainer>
	);
}
