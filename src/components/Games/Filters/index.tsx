import React from 'react';
import { Filters as FiltersType } from '..';
import styled from '../../../common/theme';
import Fieldset from '../../Fieldset';
import Input from '../../Input';
import FilterLabelWrapper from './FilterLabelWrapper';
import GenreFilters from './GenreFilters';
import ResultsCount from './ResultsCount';

type Props = {
	filters: FiltersType;
	onSetFilters(filters: FiltersType): void;
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

const Legend = Header.withComponent('legend');

export default function Filters({
	filters,
	onSetFilters,
	genres,
	resultLength,
}: Props) {
	return (
		<>
			<FilterGroup role="search">
				<Input
					value={filters.search || ''}
					onChange={event =>
						onSetFilters({ ...filters, search: event.target.value })
					}
					type="search"
					placeholder="Search…"
					aria-label="Search for games"
				/>
			</FilterGroup>
			<Divider />
			<FilterGroup>
				<FilterLabelWrapper>
					<label>
						<input
							name="free"
							type="checkbox"
							checked={filters.freeOnly}
							onChange={event =>
								onSetFilters({
									...filters,
									freeOnly: event.target.checked,
								})
							}
						/>
						Only free games
					</label>
				</FilterLabelWrapper>
			</FilterGroup>
			<Divider />
			<FilterGroup>
				<Fieldset>
					<Legend>Genres</Legend>
					<GenreFilters
						filters={filters}
						onSetFilters={onSetFilters}
						genres={genres}
					/>
				</Fieldset>
			</FilterGroup>
			<Divider />
			<ResultsCount count={resultLength} />
		</>
	);
}
