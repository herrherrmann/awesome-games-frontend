import { ascend, compose, flatten, identity, map, sortWith, uniq } from 'ramda';
import { Filters } from '.';
import api from '../../common/api';
import { Game } from '../../common/types';

export function loadGames(): Promise<Game[]> {
	return api.get('/games');
}

export function filterGames(games: Game[], filters: Filters): Game[] {
	return games.filter(game => {
		return filters.search
			? game.name.toLowerCase().includes(filters.search.toLowerCase())
			: true;
	});
}
export function getGenres(games: Game[]): string[] {
	return compose<Game[], string[][], string[], string[], string[]>(
		sortWith([ascend(identity)]),
		uniq,
		flatten,
		map<Game, string[]>(game => game.genres),
	)(games);
}
