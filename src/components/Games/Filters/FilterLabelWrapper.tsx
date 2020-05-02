import styled from '../../../common/theme';

const FilterLabelWrapper = styled.div(({ theme }) => ({
	marginTop: 0,
	marginBottom: theme.spacings.default,
	lineHeight: theme.spacings.lineHeight,
	whiteSpace: 'nowrap',
}));

export default FilterLabelWrapper;
