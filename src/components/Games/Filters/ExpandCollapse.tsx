import styled from '@emotion/styled';
import { PropsWithChildren, ReactNode, useMemo, useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import ButtonUnstyled from '../../ButtonUnstyled';

type Props = {
	label: ReactNode;
};

const Trigger = styled.div(({ theme }) => ({
	display: 'none',
	[`@media (max-width: ${theme.widths.smallScreen})`]: {
		display: 'block',
	},
}));

const Content = styled.div<{ isExpanded: boolean }>(({ isExpanded, theme }) => ({
	[`@media (max-width: ${theme.widths.smallScreen})`]: {
		display: isExpanded ? 'block' : 'none',
	},
}));

const ButtonUnstyledWithIcon = styled(ButtonUnstyled)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacings.small,
}));

export default function ExpandCollapse({ children, label }: PropsWithChildren<Props>) {
	const uniqueId = useMemo(() => {
		return `expand-collapse-${Math.random().toString(16).slice(2)}`;
	}, []);
	const [isExpanded, setExpanded] = useState<boolean>(false);
	return (
		<>
			<Trigger>
				<ButtonUnstyledWithIcon
					onClick={() => setExpanded((prev) => !prev)}
					aria-expanded={isExpanded}
					aria-controls={uniqueId}
				>
					{isExpanded ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} {label}
				</ButtonUnstyledWithIcon>
			</Trigger>
			<Content isExpanded={isExpanded} id={uniqueId}>
				{children}
			</Content>
		</>
	);
}
