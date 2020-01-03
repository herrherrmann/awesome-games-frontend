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
	flexWrap: 'wrap',
}));

const FiltersContainer = styled.div(({ theme }) => ({
	flex: '0 1',
	maxWidth: '220px',
	marginRight: theme.spacings.huge,
	marginBottom: theme.spacings.large,
}));

const GamesContainer = styled.div(({ theme }) => ({
	flex: '1 1',
}));

export type Filters = {
	search: string;
	genres: { [genre: string]: boolean };
	freeOnly: boolean;
};

const EMPTY_FILTERS: Filters = { search: '', genres: {}, freeOnly: false };

export default function Games() {
	const { data: games = [], isPending, error } = useAsync(loadGames);
	const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
	const resetFilters = useCallback(
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
				<GameList games={filteredGames} onResetFilters={resetFilters} />
			</GamesContainer>
		</LayoutContainer>
	);
}
