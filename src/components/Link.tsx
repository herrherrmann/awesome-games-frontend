import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLAnchorElement> {}

export default function Link(props: Props) {
	// eslint-disable-next-line jsx-a11y/anchor-has-content
	return <a {...props} />;
}
