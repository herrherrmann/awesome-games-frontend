import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react';
import { loadGames } from '../common/api';
import { Game } from '../common/types';
import Games from '../components/Games';

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
	return <Games games={games} />;
}
