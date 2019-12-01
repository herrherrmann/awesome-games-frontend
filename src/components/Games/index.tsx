import React from 'react';
import { useAsync } from 'react-async';
import styled from '../../common/theme';
import Link from '../Link';
import LoadingSpinner from '../LoadingSpinner';
import GameList from './GameList';
import { loadGames } from './service';

const Error = styled.div(({ theme }) => ({
	color: theme.colors.error,
}));

const Loading = styled.div(({ theme }) => ({
	padding: theme.spacings.default,
	fontSize: theme.fontSizes.large,
	textAlign: 'center',
}));

export default function Games() {
	const { data: games, isPending, error } = useAsync(loadGames);
	if (isPending) {
		return (
			<Loading>
				<LoadingSpinner /> Loading games…
			</Loading>
		);
	}
	if (error) {
		return (
			<Error>
				<strong>
					<span role="img" aria-label="Skull">
						☠️
					</span>{' '}
					Error:
				</strong>{' '}
				Games could not be loaded.
				<br />
				<small>
					The server might be starting right now, please{' '}
					<Link href="/">try again</Link> in a minute.
				</small>
			</Error>
		);
	}
	return (
		<>
			<GameList games={games || []} />
		</>
	);
}
