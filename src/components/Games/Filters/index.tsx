import styled from '@emotion/styled';
import { Filters as FiltersType } from '..';
import Checkbox from '../../Checkbox';
import Fieldset from '../../Fieldset';
import ExpandCollapse from './ExpandCollapse';
import FilterLabelWrapper from './FilterLabelWrapper';
import GenreFilters from './GenreFilters';
import ResultsCount from './ResultsCount';
import SearchInput from './SearchInput';
import TypeFilters from './TypeFilters';

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
	margin: `${theme.spacings.default} 0`,
	padding: 0,
	lineHeight: theme.spacings.lineHeight,
	fontSize: theme.fontSizes.default,
	fontWeight: theme.fontWeights.bold,
	color: theme.colors.greyDark,
}));

const Legend = Header.withComponent('legend');

export default function Filters({ filters, onSetFilters, genres, resultLength }: Props) {
	return (
		<>
			<FilterGroup role="search">
				<SearchInput
					value={filters.search || ''}
					onChange={(value) => onSetFilters({ ...filters, search: value })}
				/>
			</FilterGroup>
			<ExpandCollapse label="More filters">
				<Divider />
				<FilterGroup>
					<FilterLabelWrapper>
						<Checkbox
							label="Only free games"
							id="free"
							name="free"
							checked={filters.freeOnly}
							onChange={(event) =>
								onSetFilters({
									...filters,
									freeOnly: event.target.checked,
								})
							}
						/>
					</FilterLabelWrapper>
				</FilterGroup>
				<Divider />
				<FilterGroup>
					<Fieldset>
						<Legend>Types</Legend>
						<TypeFilters filters={filters} onSetFilters={onSetFilters} />
					</Fieldset>
				</FilterGroup>
				<Divider />
				<FilterGroup>
					<Fieldset>
						<Legend>Genres</Legend>
						<GenreFilters filters={filters} onSetFilters={onSetFilters} genres={genres} />
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
