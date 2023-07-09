import { Game } from './types';

/**
 * Backend API, use 'http://localhost:3000' for local development.
 */
const API = 'https://awesome-games-api.onrender.com';

export async function loadGames(): Promise<Game[]> {
	const response = await fetch(`${API}/games`);
	const games = await response.json();
	return games;
}
