import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { loadGames } from '../common/api';
import { Game } from '../common/types';
import Games from '../components/Games';
import GamesHead from '../components/Games/Head';

type Props = {
	games: Game[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	return {
		props: {
			games: await loadGames(),
		},
	};
};

export default function HomePage({ games }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<GamesHead />
			<Games games={games} />
		</>
	);
}
