import React, { HTMLProps } from 'react';
import styled from '../common/theme';

interface Props extends HTMLProps<HTMLAnchorElement> {}

const A = styled.a<Props>(({ theme }) => ({
	color: theme.colors.primary,
	textDecoration: 'none',
	'&:hover': {
		color: theme.colors.secondary,
		textDecoration: 'none',
	},
}));

export default function Link(props: Props) {
	// eslint-disable-next-line jsx-a11y/anchor-has-content
	return <A {...props} />;
}
