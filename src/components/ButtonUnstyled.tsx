import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button(({ theme }) => ({
	fontSize: 'inherit',
	color: theme.colors.text,
	border: 'none',
	borderRadius: theme.spacings.borderRadius,
	background: 'transparent',
	padding: 0,
	margin: 0,
	'&:hover': {
		cursor: 'pointer',
		border: 'none',
		background: 'transparent',
	},
	'&:focus': {
		border: 'none',
		boxShadow: `0 0 0 2px ${theme.colors.primary}`,
	},
}));

export default function ButtonUnstyled({ type = 'button', ...otherProps }: Props) {
	return <StyledButton type={type} {...otherProps} />;
}
