import React from 'react';
import styled from '@emotion/styled';

type Props = {};

const Header = styled.header``;

export default function AppHeader({}: Props) {
	return (
		<Header>
			<span>🔥</span> <span>Awesome Games</span>
		</Header>
	);
}
