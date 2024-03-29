import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const InputElement = styled.input(({ theme }) => ({
	appearance: 'none',
	width: '100%',
	padding: `${theme.spacings.default} ${theme.spacings.default}`,
	border: `1px solid ${theme.colors.greyLight}`,
	borderRadius: theme.spacings.borderRadius,
	color: theme.colors.text,
	fontSize: theme.fontSizes.default,
	lineHeight: theme.spacings.lineHeight,
	'&:hover': {
		border: `1px solid ${theme.colors.grey}`,
	},
	'&:focus': {
		outline: 'none',
		border: `1px solid ${theme.colors.primary}`,
		boxShadow: `0 0 0 1px ${theme.colors.primary}`,
	},
}));

export default function Input(props: Props) {
	return <InputElement {...props} />;
}
