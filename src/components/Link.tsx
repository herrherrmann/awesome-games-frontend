import React, { HTMLProps } from 'react';
import styled from '@emotion/styled';

interface Props extends HTMLProps<HTMLAnchorElement> {
	openInNewTab?: boolean;
}

const A = styled.a<Props>(({ theme }) => ({
	color: theme.colors.primary,
	textDecoration: 'none',
	'&:hover': {
		color: theme.colors.primaryDark,
		textDecoration: 'underline',
	},
}));

export default function Link({ openInNewTab, ...otherProps }: Props) {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-has-content
		<A
			target={openInNewTab ? '_blank' : otherProps.target}
			rel={openInNewTab ? 'noopener noreferrer' : undefined}
			{...otherProps}
		/>
	);
}
