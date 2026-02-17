import { Game } from './types';

const API = process.env.BACKEND_API;

export async function loadGames(): Promise<Game[]> {
	const response = await fetch(`${API}/games`);
	const games = await response.json();
	return games;
}
