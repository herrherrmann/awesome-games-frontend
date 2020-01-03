import React, { ChangeEvent, useCallback } from 'react';
import { Filters } from '..';
import FilterLabel from './FilterLabel';

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
			{genres.map(genre => (
				<FilterLabel key={genre}>
					<input
						name={`genre-${genre}`}
						type="checkbox"
						checked={!!filters.genres[genre]}
						onChange={event => handleChange(genre, event)}
					/>
					{genre}
				</FilterLabel>
			))}
		</>
	);
}
