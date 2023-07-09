import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { Game } from '../../common/types';
import FiltersComponent from './Filters';
import GameList from './GameList';
import { filterGames, getGenres } from './service';

const LayoutContainer = styled.div(({ theme }) => ({
	[`@media (min-width: ${theme.widths.smallScreen})`]: {
		display: 'flex',
		flexWrap: 'wrap',
	},
}));

const FiltersContainer = styled.div(({ theme }) => ({
	flex: '0 1',
	marginBottom: theme.spacings.large,
	[`@media (min-width: ${theme.widths.smallScreen})`]: {
		maxWidth: '220px',
		marginRight: theme.spacings.huge,
	},
}));

const GamesContainer = styled.div(() => ({
	flex: '1 1',
}));

export type Filters = {
	search: string;
	genres: { [genre: string]: boolean };
	types: { [type in Game['type']]: boolean };
	freeOnly: boolean;
};

const EMPTY_FILTERS: Filters = {
	search: '',
	genres: {},
	types: {
		local: true,
		other: true,
	},
	freeOnly: false,
};

type Props = {
	games: Game[];
};

export default function Games({ games }: Props) {
	const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
	const resetFilters = useCallback(() => {
		setFilters(EMPTY_FILTERS);
	}, [setFilters]);
	const filteredGames = useMemo(() => filterGames(games, filters), [games, filters]);
	const genres = useMemo(() => getGenres(games), [games]);
	return (
		<LayoutContainer>
			<FiltersContainer>
				<FiltersComponent
					filters={filters}
					onSetFilters={setFilters}
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
