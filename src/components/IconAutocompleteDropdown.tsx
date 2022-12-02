import BungieImage from '@dlb/dim/dim-ui/BungieImage';

import {
	Box,
	styled,
	Autocomplete,
	FormControl,
	TextField,
} from '@mui/material';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const Container = styled('div')(({ theme }) => ({
	color: theme.palette.secondary.main,
	width: '100%',
	// ['.exotic-selector-text-field fieldset']: {
	// 	borderTopLeftRadius: '0px',
	// 	borderBottomLeftRadius: '0px',
	// 	//borderLeftColor: 'transparent'
	// 	padding: theme.spacing(1),
	// 	paddingRight: 0,
	// },
}));

interface IIconAutocompleteDropdownOption {
	icon: string;
}

type IconAutocompleteDropdownProps = {
	options: IIconAutocompleteDropdownOption[];
	value: IIconAutocompleteDropdownOption;
	onChange: (value: IIconAutocompleteDropdownOption) => void;
	getGroupBy: (value: IIconAutocompleteDropdownOption) => string;
	getLabel: (value: IIconAutocompleteDropdownOption) => string;
	getId: (value: IIconAutocompleteDropdownOption) => string;
	// getName: (value: IIconAutocompleteDropdownOption) => string
	title: string;
};

// TODO: Group by armor slot
function IconAutocompleteDropdown({
	options,
	value,
	onChange,
	getGroupBy,
	getLabel,
	getId,
	title,
}: IconAutocompleteDropdownProps) {
	// TODO: fix all the copy/pasted "country" references
	return (
		<Container>
			<FormControl fullWidth>
				<Autocomplete
					id={title}
					options={options}
					autoHighlight
					value={value}
					disableClearable
					style={{ maxHeight: '80vh' }}
					groupBy={(option) => getGroupBy(option)}
					onChange={(_, value) => {
						onChange(value as IIconAutocompleteDropdownOption);
					}}
					isOptionEqualToValue={(option, value) => {
						return getId(option) === getId(value);
					}}
					getOptionLabel={(option) =>
						getLabel(option as IIconAutocompleteDropdownOption)
					}
					renderOption={(props, option, { inputValue }) => {
						const matches = match(getLabel(option), inputValue, {
							insideWords: true,
						});
						const parts = parse(getLabel(option), matches);
						return (
							<Box
								component="li"
								sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
								{...props}
							>
								{
									// TODO FIX ALT
								}
								<BungieImage width="40" src={option.icon} alt="asdf" />
								<div>
									{parts.map((part, index) => (
										<span
											key={index}
											style={{
												fontWeight: part.highlight ? 700 : 400,
											}}
										>
											{part.text}
										</span>
									))}
								</div>
							</Box>
						);
					}}
					renderInput={(params) => {
						return (
							<TextField
								className="exotic-selector-text-field"
								label={title}
								{...params}
								InputProps={{
									...params.InputProps,
									startAdornment: (
										<Box
											sx={{
												marginTop: '7.5px',
												marginBottom: '1.5px',
												marginLeft: '5px',
											}}
										>
											<BungieImage width={40} height={40} src={value.icon} />
										</Box>
									),
									autoComplete: 'new-password', // disable autocomplete and autofill
								}}
							/>
						);
					}}
				/>
			</FormControl>
		</Container>
	);
}

export default IconAutocompleteDropdown;
