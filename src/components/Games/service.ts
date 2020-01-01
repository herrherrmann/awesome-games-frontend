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
