/*
USAGE: From the root directory run "npm run generate"
*/
import lodash from 'lodash';
import path from 'path';
import {
	DestinyInventoryItemDefinition,
	DestinySandboxPerkDefinition,
} from 'bungie-api-ts-no-const-enum/destiny2';
import { promises as fs } from 'fs';
import {
	generateId,
	getDefinitions,
	getDescription,
} from '@dlb/scripts/generation/utils';
import { IAspect } from '@dlb/types/generation';
import { generateAspectIdEnumFileString } from './generateAspectIdEnum';
import { generateAspectMapping } from './generateAspectMapping';
import { bungieNetPath } from '@dlb/utils/item-utils';

const buildAspectData = (
	aspect: DestinyInventoryItemDefinition,
	sandboxPerkDefinitions: Record<number, DestinySandboxPerkDefinition>
): IAspect => {
	return {
		name: aspect.displayProperties.name,
		id: generateId(aspect.displayProperties.name),
		description: getDescription(aspect, sandboxPerkDefinitions),
		icon: bungieNetPath(aspect.displayProperties.icon),
		hash: aspect.hash,
		fragementSlots: aspect.plug.energyCapacity.capacityValue,
	};
};

export async function run() {
	const {
		DestinyInventoryItemDefinition: destinyInventoryItemDefinitions,
		DestinySandboxPerkDefinition: destinySandboxPerkDefinitions,
	} = await getDefinitions();
	const sandboxPerkDefinitions = destinySandboxPerkDefinitions as Record<
		number,
		DestinySandboxPerkDefinition
	>;

	console.log('Received definitions');
	console.log('Finding aspects');
	const aspects: IAspect[] = [];

	const allAspects = lodash(destinyInventoryItemDefinitions)
		.values()
		.filter((v) => v.traitIds)
		.filter((v) => v.traitIds.includes('item_type.aspect'))
		.value() as DestinyInventoryItemDefinition[];

	allAspects.forEach((aspect) => {
		aspects.push(buildAspectData(aspect, sandboxPerkDefinitions));
	});

	const aspectsPath = ['.', 'src', 'generated', 'aspect'];

	// We must build the enums first as those are imported by other generated files
	const aspectIdEnumGeneratedPath = path.join(
		...[...aspectsPath, 'EAspectId.ts']
	);
	const aspectIdEnumExportString = generateAspectIdEnumFileString(aspects);

	console.log('Writing to file: ', aspectIdEnumGeneratedPath);
	await fs.writeFile(
		path.resolve(aspectIdEnumGeneratedPath),
		aspectIdEnumExportString
	);

	const aspectMappingGeneratedPath = path.join(
		...[...aspectsPath, 'AspectMapping.ts']
	);
	const aspectMappingExportString = generateAspectMapping(aspects);

	console.log('Writing to file: ', aspectMappingGeneratedPath);
	await fs.writeFile(
		path.resolve(aspectMappingGeneratedPath),
		aspectMappingExportString
	);
}
