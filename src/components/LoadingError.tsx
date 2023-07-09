import React from 'react';
import styled from '../common/theme';
import Link from './Link';

const Container = styled.div(({ theme }) => ({
	color: theme.colors.error,
}));

export default function LoadingError() {
	return (
		<Container>
			<strong>
				<span role="img" aria-label="Skull">
					☠️
				</span>{' '}
				Error:
			</strong>{' '}
			Games could not be loaded.
			<br />
			<small>
				The server might be starting right now, please <Link href="/">try again</Link> in a minute.
			</small>
		</Container>
	);
}
