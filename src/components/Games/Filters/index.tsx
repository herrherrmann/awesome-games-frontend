import React from 'react';
import { Filters as FiltersType } from '..';
import styled from '../../../common/theme';
import Input from '../../Input';
import ResultsCount from './ResultsCount';

type Props = {
	filters: FiltersType;
	setFilters(filters: FiltersType): void;
	resultLength: number;
};

const Filter = styled.div(({ theme }) => ({
	marginBottom: theme.spacings.large,
}));

const Divider = styled.hr(({ theme }) => ({
	borderTop: `1px solid ${theme.colors.lightGrey}`,
	borderRight: `none`,
	borderBottom: `none`,
	borderLeft: `none`,
}));

export default function Filters({ filters, setFilters, resultLength }: Props) {
	return (
		<>
			<Filter>
				<Input
					value={filters.search || ''}
					onChange={event =>
						setFilters({ ...filters, search: event.target.value })
					}
					placeholder="Search…"
				/>
			</Filter>
			<Divider />
			<ResultsCount count={resultLength} />
		</>
	);
}
