import React, { InputHTMLAttributes } from 'react';
import { FaCheck } from 'react-icons/fa';
import styled from '@emotion/styled';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

const StyledCheckbox = styled.input(
	({ theme }) => `
	position: absolute;
	opacity: 0;
	margin: 0;
	padding: 0;
	
	& + label {
		position: relative;
		cursor: pointer;
		padding: 0;
	}
	
	// Box.
	& + label:before {
		content: '';
		margin-right: ${theme.spacings.default};
		display: inline-flex;
		width: ${theme.fontSizes.small};
		height: ${theme.fontSizes.small};
		border-radius: ${theme.spacings.borderRadius};
		background: ${theme.colors.cardBackground};
		border: 1px solid ${theme.colors.greyLight};
	}
	
	// Box hover
	&:hover + label:before {
		border: 1px solid ${theme.colors.grey};
	}
	
	// Box focus
	&:focus + label:before {
		box-shadow: 0 0 0 2px ${theme.colors.primary};
	}
	
	// Box checked
	&:checked + label:before {
		background: ${theme.colors.primary};
	}

	// Box checked + focus
	&:checked:focus + label:before {
		box-shadow: 0 0 0 2px ${theme.colors.primaryDark};
	}
	
	// Disabled state label.
	&:disabled + label {
		color: ${theme.colors.greyLight};
		cursor: auto;
	}
	
	// Disabled box.
	&:disabled + label:before {
		box-shadow: none;
		background: ${theme.colors.greyLight};
	}`,
);

const Container = styled.span(() => ({
	position: 'relative',
	display: 'inline-block',
	lineHeight: 1,
}));

const StyledIcon = styled.div(({ theme }) => ({
	position: 'absolute',
	top: 4,
	bottom: 0,
	left: 3,
	color: theme.colors.cardBackground,
	fontSize: 8,
	width: theme.fontSizes.small,
	pointerEvents: 'none',
}));

export default function Checkbox({ id, label, checked, ...otherProps }: Props) {
	return (
		<Container>
			<StyledCheckbox type="checkbox" id={id} checked={checked} {...otherProps} />
			{label && <label htmlFor={id}>{label}</label>}
			{checked && (
				<StyledIcon>
					<FaCheck />
				</StyledIcon>
			)}
		</Container>
	);
}
