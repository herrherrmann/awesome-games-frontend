import React, { InputHTMLAttributes } from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import styled from '../common/theme';

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

const StyledCheckbox = styled.input(
	({ theme }) => `
	position: absolute; // take it out of document flow
	opacity: 0; // hide it
	
	& + label {
		position: relative;
		cursor: pointer;
		padding: 0;
	}
	
	// Box.
	& + label:before {
		content: '';
		margin-right: ${theme.spacings.default};
		display: inline-block;
		width: ${theme.fontSizes.small};
		height: ${theme.fontSizes.small};
		border-radius: ${theme.spacings.borderRadius};
		background: ${theme.colors.cardBackground};
		border: 1px solid ${theme.colors.greyLight};
	}
	
	// Box hover
	&:hover + label:before {
		background: ${theme.colors.greyLight};
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

const Container = styled.span(({ theme }) => ({
	position: 'relative',
	display: 'inline-block',
}));

const StyledIcon = styled.div(({ theme }) => ({
	position: 'absolute',
	top: 1,
	left: 0,
	color: theme.colors.cardBackground,
	fontSize: theme.fontSizes.default,
	width: theme.fontSizes.small,
	height: theme.fontSizes.small,
	pointerEvents: 'none',
}));

const StyledLabel = styled.label<{ for: string }>();

export default function Checkbox({ id, label, checked, ...otherProps }: Props) {
	return (
		<Container>
			<StyledCheckbox
				type="checkbox"
				id={id}
				checked={checked}
				{...otherProps}
			/>
			{label && <StyledLabel for={id!}>{label}</StyledLabel>}
			{checked && (
				<StyledIcon>
					<IoIosCheckmark />
				</StyledIcon>
			)}
		</Container>
	);
}
