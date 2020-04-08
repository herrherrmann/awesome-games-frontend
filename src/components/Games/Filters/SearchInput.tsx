import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from '../../../common/theme';
import Button from '../../Button';
import Input from '../../Input';

type Props = {
	value: string;
	onChange(value: string): void;
};

const Container = styled.div(() => ({
	position: 'relative',
}));

const resetButtonMargin = 3;
const resetButtonSize = 24;

const ResetButton = styled(Button)(({ theme }) => ({
	position: 'absolute',
	right: resetButtonMargin,
	top: resetButtonMargin,
	bottom: resetButtonMargin,
	border: '1px solid transparent',
	width: resetButtonSize,
	padding: 0,
	fontSize: theme.fontSizes.large,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

const StyledInput = styled(Input)(() => ({
	paddingRight: resetButtonMargin + resetButtonSize,
}));

export default function SearchInput({ value, onChange }: Props) {
	return (
		<Container>
			<StyledInput
				value={value}
				onChange={(event) => onChange(event.target.value)}
				type="text"
				placeholder="Search…"
				aria-label="Search for games"
			/>
			{value && (
				<ResetButton title="Reset search" onClick={() => onChange('')}>
					<IoIosClose />
				</ResetButton>
			)}
		</Container>
	);
}
