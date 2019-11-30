export type Game = {
	id: number;
	igdbId: number | null;
	name: string;
	/**
	 * The original name from the GitHub readme
	 */
	originalName: string;
	description: string | null;
	genres: string[];
	releaseYear: number | null;
	coverUrl: string | null;
	rating: number | null;
	isFree: boolean;
	links: {
		website?: string;
		igdb?: string;
		steam?: string;
	};
};
