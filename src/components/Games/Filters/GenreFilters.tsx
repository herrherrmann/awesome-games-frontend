import React, { ChangeEvent, useCallback } from 'react';
import { Filters } from '..';
import Checkbox from '../../Checkbox';
import FilterLabelWrapper from './FilterLabelWrapper';

type Props = {
	filters: Filters;
	onSetFilters(filters: Filters): void;
	genres: string[];
};

export default function GenreFilters({ filters, onSetFilters, genres }: Props) {
	const handleChange = useCallback(
		(genre: string, event: ChangeEvent<HTMLInputElement>) => {
			onSetFilters({
				...filters,
				genres: { ...filters.genres, [genre]: event.target.checked },
			});
		},
		[filters, onSetFilters],
	);
	return (
		<>
			{genres.map((genre) => (
				<FilterLabelWrapper key={genre}>
					<Checkbox
						label={genre}
						id={genre}
						name={`genre-${genre}`}
						checked={!!filters.genres[genre]}
						onChange={(event) => handleChange(genre, event)}
					/>
				</FilterLabelWrapper>
			))}
		</>
	);
}
