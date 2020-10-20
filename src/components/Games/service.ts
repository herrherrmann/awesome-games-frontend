import { all, ascend, compose, flatten, identity, intersection, map, sortWith, toPairs, uniq } from 'ramda';
import { Filters } from '.';
import api from '../../common/api';
import { Game } from '../../common/types';

export function loadGames(): Promise<Game[]> {
	return api.get('/games');
}

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

function getAllowedGenres(genres: { [genre: string]: boolean }): string[] {
	return toPairs(genres)
		.filter(([, isEnabled]) => isEnabled)
		.map(([genre]) => genre);
}

export function getGenres(games: Game[]): string[] {
	return compose<Game[], string[][], string[], string[], string[]>(
		sortWith([ascend(identity)]),
		uniq,
		flatten,
		map<Game, string[]>((game) => game.genres),
	)(games);
}
