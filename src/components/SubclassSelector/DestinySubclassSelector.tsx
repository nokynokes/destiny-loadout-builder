import { EDestinySubclassId } from '@dlb/types/IdEnums';
import { styled } from '@mui/material';
import { selectSelectedDestinyClass } from '@dlb/redux/features/selectedDestinyClass/selectedDestinyClassSlice';
import { useAppDispatch, useAppSelector } from '@dlb/redux/hooks';
import { getDestinySubclassIdListByDestinyClassId } from '@dlb/types/DestinyClass';
import IconDropdown from '@dlb/components/IconDropdown';
import {
	selectSelectedDestinySubclass,
	setSelectedDestinySubclass,
} from '@dlb/redux/features/selectedDestinySubclass/selectedDestinySubclassSlice';
import { getDestinySubclass } from '@dlb/types/DestinySubclass';
const Container = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	// paddingRight: 0
}));

const IconDropdownContainer = styled('div')(({ theme }) => ({
	//
}));

type Option = {
	label: string;
	id: string;
	disabled?: boolean;
	icon: string;
};

function DestinySubclassSelector() {
	const selectedDestinySubclass = useAppSelector(selectSelectedDestinySubclass);
	const selectedDestinyClass = useAppSelector(selectSelectedDestinyClass);
	const selectedDestinySubclassId =
		selectedDestinySubclass[selectedDestinyClass];
	const dispatch = useAppDispatch();

	const getLabel = (option: Option) => option.label;

	const handleChange = (destinySubclass: EDestinySubclassId) => {
		if (
			selectedDestinySubclassId &&
			selectedDestinySubclassId === destinySubclass
		) {
			// Don't trigger a redux dirty
			return;
		}
		dispatch(
			setSelectedDestinySubclass({
				...selectedDestinySubclass,
				[selectedDestinyClass]: destinySubclass,
			})
		);
	};

	// TODO: Memoize the generation of options here
	const destinySubclassIdList =
		getDestinySubclassIdListByDestinyClassId(selectedDestinyClass);
	const options = destinySubclassIdList.map((destinySubclassId) => {
		const { name, id, icon } = getDestinySubclass(destinySubclassId);

		// TODO: Use the correct icon, not the element icon. Like what DIM does.
		// const { icon } = getElement(elementId);
		return {
			label: name,
			icon: icon,
			id: id,
		};
	});

	return (
		<>
			<Container>
				<IconDropdownContainer>
					<IconDropdown
						options={options}
						getLabel={getLabel}
						value={selectedDestinySubclass[selectedDestinyClass] || ''}
						onChange={handleChange}
						title="Subclass"
					/>
				</IconDropdownContainer>
			</Container>
		</>
	);
}

export default DestinySubclassSelector;
