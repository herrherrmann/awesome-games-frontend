import React, { HTMLProps } from 'react';
import styled from '../common/theme';

interface Props extends HTMLProps<HTMLAnchorElement> {
	openInNewTab?: boolean;
}

const A = styled.a<Props>(({ theme }) => ({
	color: theme.colors.primary,
	textDecoration: 'none',
	'&:hover': {
		color: theme.colors.primaryHighlight,
		textDecoration: 'none',
	},
}));

export default function Link(props: Props) {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-has-content
		<A
			target={props.openInNewTab ? '_blank' : props.target}
			rel={props.openInNewTab ? 'noopener noreferrer' : undefined}
			{...props}
		/>
	);
}
