import React, { useCallback, useMemo, useState } from 'react';
import { useAsync } from 'react-async';
import styled from '../../common/theme';
import Filters from './Filters';
import GameList from './GameList';
import LoadingError from './LoadingError';
import LoadingPending from './LoadingPending';
import { filterGames, getGenres, loadGames } from './service';

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
	genres: { [genre: string]: boolean };
};

const EMPTY_FILTERS: Filters = { search: '', genres: {} };

export default function Games() {
	const { data: games = [], isPending, error } = useAsync(loadGames);
	const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
	const resetSearch = useCallback(
		event => {
			// Prevent link/navigation.
			event.preventDefault();
			setFilters(EMPTY_FILTERS);
		},
		[setFilters],
	);
	const filteredGames = useMemo(() => filterGames(games, filters), [
		games,
		filters,
	]);
	const genres = useMemo(() => getGenres(games), [games]);
	if (isPending) {
		return <LoadingPending />;
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
					genres={genres}
					resultLength={filteredGames.length}
				/>
			</FiltersContainer>
			<GamesContainer>
				<GameList games={filteredGames} onResetSearch={resetSearch} />
			</GamesContainer>
		</LayoutContainer>
	);
}
