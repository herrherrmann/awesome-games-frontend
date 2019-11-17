/** @tsx tsx */
import React from 'react';
import { useAsync } from 'react-async';
import styled from '../../common/theme';
import GameList from './GameList';
import { loadGames } from './service';

type Props = {};

const Error = styled.div(props => ({
	color: props.theme.colors.error,
}));

export default function Games(props: Props) {
	const { data: games, isPending, error } = useAsync(loadGames);
	if (isPending) {
		return <>Loading games…</>;
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
				Games could not be loaded ({error.message}).
			</Error>
		);
	}
	return (
		<>
			<GameList games={games || []} />
		</>
	);
}
