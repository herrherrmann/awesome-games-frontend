import React from 'react';
import { useAsync } from 'react-async';
import styled from '../../common/theme';
import LoadingSpinner from '../LoadingSpinner';
import GameList from './GameList';
import LoadingError from './LoadingError';
import { loadGames } from './service';

const Loading = styled.div(({ theme }) => ({
	padding: theme.spacings.default,
	fontSize: theme.fontSizes.large,
	textAlign: 'center',
}));

export default function Games() {
	const { data: games = [], isPending, error } = useAsync(loadGames);
	if (isPending) {
		return (
			<Loading>
				<LoadingSpinner /> Loading games…
			</Loading>
		);
	}
	if (error) {
		return <LoadingError />;
	}
	return <GameList games={games} />;
}
