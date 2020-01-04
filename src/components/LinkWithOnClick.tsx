import React, { FC, HTMLProps, useCallback } from 'react';
import Link from './Link';

const LinkWithOnClick: FC<HTMLProps<HTMLAnchorElement>> = ({
	onClick,
	...otherProps
}) => {
	const handleClick = useCallback(
		event => {
			// Prevent link/navigation.
			event.preventDefault();
			if (onClick) {
				onClick(event);
			}
		},
		[onClick],
	);
	return <Link {...otherProps} href="/" onClick={handleClick} />;
};

export default LinkWithOnClick;
