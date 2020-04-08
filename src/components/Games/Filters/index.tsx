import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { Filters as FiltersType } from '..';
import styled from '../../../common/theme';
import Fieldset from '../../Fieldset';
import ExpandCollapse from './ExpandCollapse';
import FilterLabelWrapper from './FilterLabelWrapper';
import GenreFilters from './GenreFilters';
import ResultsCount from './ResultsCount';
import SearchInput from './SearchInput';

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
	borderTop: `1px solid ${theme.colors.greyLight}`,
	borderRight: `none`,
	borderBottom: `none`,
	borderLeft: `none`,
}));

const Header = styled.h3(({ theme }) => ({
	margin: `${theme.spacings.default} 0 ${theme.spacings.default} 0`,
	fontSize: theme.fontSizes.default,
	fontWeight: theme.fontWeights.bold,
	color: theme.colors.greyDark,
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
				<SearchInput
					value={filters.search || ''}
					onChange={(value) =>
						onSetFilters({ ...filters, search: value })
					}
				/>
			</FilterGroup>
			<ExpandCollapse
				expand={
					<>
						<IoMdArrowDropright /> More Filters
					</>
				}
				collapse={
					<>
						<IoMdArrowDropdown /> More Filters
					</>
				}
			>
				<Divider />
				<FilterGroup>
					<FilterLabelWrapper>
						<label>
							<input
								name="free"
								type="checkbox"
								checked={filters.freeOnly}
								onChange={(event) =>
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
			</ExpandCollapse>
			<Divider />
			<div>
				<ResultsCount count={resultLength} />
			</div>
		</>
	);
}
