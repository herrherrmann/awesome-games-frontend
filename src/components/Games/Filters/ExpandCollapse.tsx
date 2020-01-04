import React, { PropsWithChildren, ReactNode, useState } from 'react';
import styled from '../../../common/theme';
import LinkWithOnClick from '../../LinkWithOnClick';

type Props = {
	expand: ReactNode;
	collapse: ReactNode;
};

const Trigger = styled.div(({ theme }) => ({
	display: 'none',
	[`@media (max-width: ${theme.widths.smallScreen})`]: {
		display: 'block',
	},
}));

const Content = styled.div<{ isExpanded: boolean }>(
	({ isExpanded, theme }) => ({
		[`@media (max-width: ${theme.widths.smallScreen})`]: {
			display: isExpanded ? 'block' : 'none',
		},
	}),
);

export default function ExpandCollapse({
	children,
	expand,
	collapse,
}: PropsWithChildren<Props>) {
	const [isExpanded, setExpanded] = useState<boolean>(false);
	return (
		<>
			<Trigger>
				{isExpanded ? (
					<LinkWithOnClick onClick={() => setExpanded(false)}>
						{collapse}
					</LinkWithOnClick>
				) : (
					<LinkWithOnClick onClick={() => setExpanded(true)}>
						{expand}
					</LinkWithOnClick>
				)}
			</Trigger>
			<Content isExpanded={isExpanded}>{children}</Content>
		</>
	);
}
