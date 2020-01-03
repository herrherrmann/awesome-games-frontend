import React from 'react';
import { Filters as FiltersType } from '..';
import styled from '../../../common/theme';
import Input from '../../Input';
import GenreFilters from './GenreFilters';
import ResultsCount from './ResultsCount';
import FilterLabel from './FilterLabel';

type Props = {
	filters: FiltersType;
	setFilters(filters: FiltersType): void;
	genres: string[];
	resultLength: number;
};

const FilterGroup = styled.div(({ theme }) => ({
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
			<FilterGroup>
				<Input
					value={filters.search || ''}
					onChange={event =>
						setFilters({ ...filters, search: event.target.value })
					}
					placeholder="Search…"
				/>
			</FilterGroup>
			<Divider />
			<FilterGroup>
				<FilterLabel>
					<input
						name="free"
						type="checkbox"
						checked={filters.freeOnly}
						onChange={event =>
							setFilters({
								...filters,
								freeOnly: event.target.checked,
							})
						}
					/>
					Only Free Games
				</FilterLabel>
			</FilterGroup>
			<Divider />
			<FilterGroup>
				<Header>Genres</Header>
				<GenreFilters
					filters={filters}
					onSetFilters={setFilters}
					genres={genres}
				/>
			</FilterGroup>
			<Divider />
			<ResultsCount count={resultLength} />
		</>
	);
}
