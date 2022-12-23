import { formatStringForFile } from '@dlb/scripts/generation/utils';

export const generateModDisplayNameIdEnumFileString = (
	modDisplayNames: string[]
): string => {
	const modDisplayNameIdEnumsString = modDisplayNames.map(
		(modDisplayName) => `${modDisplayName} = '${modDisplayName}',`
	);
	const setDataFileSource = `// This file is generated by the generateModDisplayNameIdEnums.ts script.
	// Do not manually make changes to this file.
  
	export enum EModDisplayNameId {
		${modDisplayNameIdEnumsString.join('\n')}
	}
	`;
	return formatStringForFile(setDataFileSource);
};
