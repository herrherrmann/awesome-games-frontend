import React from 'react';
import styled from '../common/theme';

type Props = {
	size?: number;
	color?: string;
};

const SpinnerContainer = styled.div<Props>(
	({ size = 12, color, theme }) => `
	display: inline-block;
	position: relative;
	width: ${size}px;
	height: ${size}px;

	& div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: ${size * 0.8}px;
		height: ${size * 0.8}px;
		margin: 2px;
		border: 2px solid ${color || theme.colors.text};
		border-radius: 50%;
		animation: lds-ring-animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: ${color || theme.colors.text} transparent transparent transparent;
	}

	& div:nth-child(1) {
		animation-delay: -0.45s;
	}

	& div:nth-child(2) {
		animation-delay: -0.3s;
	}

	& div:nth-child(3) {
		animation-delay: -0.15s;
	}

	@keyframes lds-ring-animation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`,
);

export default function LoadingSpinner({ size, color }: Props) {
	return (
		<SpinnerContainer size={size} color={color}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</SpinnerContainer>
	);
}
