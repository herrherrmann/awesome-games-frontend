import styled from '@emotion/styled';
import ButtonUnstyled from './ButtonUnstyled';

const ButtonLinkStyle = styled(ButtonUnstyled)(({ theme }) => ({
	color: theme.colors.primary,
	textDecoration: 'none',
	'&:hover': {
		color: theme.colors.primaryDark,
		textDecoration: 'underline',
	},
}));

export default ButtonLinkStyle;
