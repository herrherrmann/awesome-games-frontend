import React from 'react';
import { Filters as FiltersType } from '..';
import styled from '../../../common/theme';
import Input from '../../Input';
import GenreFilters from './GenreFilters';
import ResultsCount from './ResultsCount';

type Props = {
	filters: FiltersType;
	setFilters(filters: FiltersType): void;
	genres: string[];
	resultLength: number;
};

const Filter = styled.div(({ theme }) => ({
	marginBottom: theme.spacings.large,
}));

const Divider = styled.hr(({ theme }) => ({
	margin: `${theme.spacings.large} 0`,
	borderTop: `1px solid ${theme.colors.lightGrey}`,
	borderRight: `none`,
	borderBottom: `none`,
	borderLeft: `none`,
}));

const Header = styled.h3(({ theme }) => ({
	margin: `${theme.spacings.default} 0 ${theme.spacings.default} 0`,
	fontSize: theme.fontSizes.default,
	fontWeight: theme.fontWeights.bold,
	color: theme.colors.grey,
}));

export default function Filters({
	filters,
	setFilters,
	genres,
	resultLength,
}: Props) {
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
			<Filter>
				<Header>Genres</Header>
				<GenreFilters
					filters={filters}
					onSetFilters={setFilters}
					genres={genres}
				/>
			</Filter>
			<Divider />
			<ResultsCount count={resultLength} />
		</>
	);
}
