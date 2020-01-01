import styled from '../../common/theme';
import React from 'react';
import Input from '../Input';
import ResultsCount from './ResultsCount';
import { Filters as FiltersType } from '.';

type Props = {
	filters: FiltersType;
	setFilters(filters: FiltersType): void;
	resultLength: number;
};

const SearchBox = styled.div(({ theme }) => ({
	marginBottom: theme.spacings.large,
}));

export default function Filters({ filters, setFilters, resultLength }: Props) {
	return (
		<>
			<SearchBox>
				<Input
					value={filters.search}
					onChange={event =>
						setFilters({ ...filters, search: event.target.value })
					}
					placeholder="Search…"
				/>
			</SearchBox>
			<ResultsCount count={resultLength} />
		</>
	);
}
