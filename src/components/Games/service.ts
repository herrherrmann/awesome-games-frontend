import { all, intersection, uniq } from 'ramda';
import { Filters } from '.';
import { Game } from '../../common/types';

export function filterGames(games: Game[], filters: Filters): Game[] {
	const allowedGenres = getAllowedGenres(filters.genres);
	return games.filter((game) =>
		all(Boolean, [
			filters.freeOnly ? game.isFree : true,
			isAllOffOrOn(filters.types) || filters.types[game.type],
			filters.search ? game.name.toLowerCase().includes(filters.search.toLowerCase()) : true,
			allowedGenres.length ? intersection(game.genres, allowedGenres).length > 0 : true,
		]),
	);
}

function isAllOffOrOn(types: Filters['types']): boolean {
	const flags = Object.values(types);
	return uniq(flags).length === 1;
}

type GenreMap = {
	[genre: string]: boolean;
};

function getAllowedGenres(genres: GenreMap): string[] {
	const entries = Object.entries(genres);
	const entriesWithTrue = entries.filter(([, isEnabled]) => isEnabled);
	return entriesWithTrue.map(([genre]) => genre);
}

export function getGenres(games: Game[]): string[] {
	const genres = games.flatMap((game) => game.genres);
	const uniqueGenres = [...new Set(genres)];
	return uniqueGenres.sort();
}
