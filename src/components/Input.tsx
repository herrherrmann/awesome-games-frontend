import React, { InputHTMLAttributes } from 'react';
import styled from '../common/theme';

type Props = InputHTMLAttributes<HTMLInputElement> & {};

const InputElement = styled.input<Props>(({ theme }) => ({
	width: '100%',
	padding: `${theme.spacings.small} ${theme.spacings.default}`,
	border: `1px solid ${theme.colors.lightGrey}`,
	borderRadius: theme.spacings.borderRadius,
	color: theme.colors.text,
	fontSize: theme.fontSizes.default,
}));

export default function Input(props: Props) {
	return <InputElement {...props} />;
}
