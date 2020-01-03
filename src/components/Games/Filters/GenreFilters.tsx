import React, { ChangeEvent, useCallback } from 'react';
import { Filters } from '..';
import styled from '../../../common/theme';

type Props = {
	filters: Filters;
	onSetFilters(filters: Filters): void;
	genres: string[];
};

const Label = styled.label(({ theme }) => ({
	display: 'block',
	marginTop: 0,
	marginBottom: theme.spacings.default,
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
}));

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
				<Label key={genre}>
					<input
						name={`genre-${genre}`}
						type="checkbox"
						checked={!!filters.genres[genre]}
						onChange={event => handleChange(genre, event)}
					/>
					{genre}
				</Label>
			))}
		</>
	);
}
