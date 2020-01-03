import styled from '../../../common/theme';

const FilterLabel = styled.label(({ theme }) => ({
	display: 'block',
	marginTop: 0,
	marginBottom: theme.spacings.default,
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
}));

export default FilterLabel;
