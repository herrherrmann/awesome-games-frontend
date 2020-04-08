import React, { ButtonHTMLAttributes } from 'react';
import styled from '../common/theme';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button<Props>(({ theme }) => ({
	fontSize: theme.fontSizes.default,
	color: theme.colors.text,
	border: `1px solid ${theme.colors.greyLight}`,
	borderRadius: theme.spacings.borderRadius,
	background: theme.colors.cardBackground,
	textDecoration: 'none',
	textAlign: 'center',
	padding: `${theme.spacings.small} ${theme.spacings.default}`,
	margin: 0,
	'&:hover': {
		cursor: 'pointer',
		border: `1px solid ${theme.colors.grey}`,
	},
	'&:focus': {
		border: `1px solid ${theme.colors.primary}`,
		boxShadow: `0 0 0 1px ${theme.colors.primary}`,
	},
}));

export default function Button({ type = 'button', ...otherProps }: Props) {
	return <StyledButton type={type} {...otherProps} />;
}
