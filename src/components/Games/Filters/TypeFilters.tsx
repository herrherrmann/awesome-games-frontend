import React, { ChangeEvent, useCallback } from 'react';
import { Filters } from '..';
import { Game } from '../../../common/types';
import Checkbox from '../../Checkbox';
import FilterLabelWrapper from './FilterLabelWrapper';

type Props = {
	filters: Filters;
	onSetFilters(filters: Filters): void;
};

const TYPES: {
	type: Game['type'];
	label: string;
}[] = [
	{ type: 'local', label: 'Local Multiplayer' },
	{ type: 'other', label: 'Online/LAN' },
];

export default function TypeFilters({ filters, onSetFilters }: Props) {
	const handleChange = useCallback(
		(type: Game['type'], event: ChangeEvent<HTMLInputElement>) => {
			onSetFilters({
				...filters,
				types: { ...filters.types, [type]: event.target.checked },
			});
		},
		[filters, onSetFilters],
	);
	return (
		<>
			{TYPES.map(({ type, label }) => (
				<FilterLabelWrapper key={type}>
					<Checkbox
						label={label}
						id={type}
						name={`type-${type}`}
						checked={!!filters.types[type]}
						onChange={(event) => handleChange(type, event)}
					/>
				</FilterLabelWrapper>
			))}
		</>
	);
}
