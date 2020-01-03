import styled from '../../../common/theme';

const FilterLabelWrapper = styled.div(({ theme }) => ({
	marginTop: 0,
	marginBottom: theme.spacings.default,
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
}));

export default FilterLabelWrapper;
