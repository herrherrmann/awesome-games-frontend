import styled from '@emotion/styled';
import React from 'react';

type LinkProps = {
	openInNewTab?: boolean;
};

type Props = LinkProps & React.ComponentPropsWithoutRef<'a'>;

const A = styled.a<LinkProps>(({ theme }) => ({
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
			{...otherProps}
			target={openInNewTab ? '_blank' : otherProps.target}
			rel={openInNewTab ? 'noopener noreferrer' : otherProps.rel}
		/>
	);
}
