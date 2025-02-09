import { ESuperAbilityId } from '@dlb/generated/superAbility/ESuperAbilityId';
import {
	EnumDictionary,
	IHash,
	Mapping,
	IIcon,
	IIdentifiableName,
	ValidateEnumList,
	MISSING_ICON,
} from './globals';
import { EDestinyClassId, EDestinySubclassId, EElementId } from './IdEnums';

// Sorted by [hunter, warlock, titan] and then alphabetically
export const DestinySubclassIdList = ValidateEnumList(
	Object.values(EDestinySubclassId),
	[
		EDestinySubclassId.Arcstrider,
		EDestinySubclassId.Gunslinger,
		EDestinySubclassId.Nightstalker,
		EDestinySubclassId.Revenant,
		EDestinySubclassId.Dawnblade,
		EDestinySubclassId.Shadebinder,
		EDestinySubclassId.Stormcaller,
		EDestinySubclassId.Voidwalker,
		EDestinySubclassId.Behemoth,
		EDestinySubclassId.Sentinel,
		EDestinySubclassId.Striker,
		EDestinySubclassId.Sunbreaker,
		EDestinySubclassId.Broodweaver,
		EDestinySubclassId.Threadrunner,
		EDestinySubclassId.Berserker,
	]
);

export interface IDestinySubclass extends IIdentifiableName, IIcon, IHash {
	superAbilityIdList: ESuperAbilityId[];
	destinyClassId: EDestinyClassId;
	elementId: EElementId;
}

// TODO: Generate this
const DestinySubclassIdToDestinySubclassMapping: EnumDictionary<
	EDestinySubclassId,
	IDestinySubclass
> = {
	[EDestinySubclassId.Stormcaller]: {
		id: EDestinySubclassId.Stormcaller,
		name: 'Stormcaller',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/83c478558665bbadd251d80d3d05bc2e.png',
		superAbilityIdList: [
			ESuperAbilityId.ChaosReach,
			ESuperAbilityId.Stormtrance,
		],
		destinyClassId: EDestinyClassId.Warlock,
		elementId: EElementId.Arc,
		hash: 3168997075,
	},
	[EDestinySubclassId.Dawnblade]: {
		id: EDestinySubclassId.Dawnblade,
		name: 'Dawnblade',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/fedcb91b7ab0584c12f0e9fec730702b.png',
		superAbilityIdList: [
			ESuperAbilityId.Daybreak,
			ESuperAbilityId.WellOfRadiance,
		],
		destinyClassId: EDestinyClassId.Warlock,
		elementId: EElementId.Solar,
		hash: 3941205951,
	},
	[EDestinySubclassId.Voidwalker]: {
		id: EDestinySubclassId.Voidwalker,
		name: 'Voidwalker',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/fa3084d2798d59db7b3419a2fae1bf0c.png',
		superAbilityIdList: [
			ESuperAbilityId.NovaWarp,
			ESuperAbilityId.NovaBombVortex,
			ESuperAbilityId.NovaBombCataclysm,
		],
		destinyClassId: EDestinyClassId.Warlock,
		elementId: EElementId.Void,
		hash: 2849050827,
	},
	[EDestinySubclassId.Shadebinder]: {
		id: EDestinySubclassId.Shadebinder,
		name: 'Shadebinder',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/3c0dc830b83a9f3e9a52b7bea4494f64.png',
		superAbilityIdList: [ESuperAbilityId.WintersWrath],
		destinyClassId: EDestinyClassId.Warlock,
		elementId: EElementId.Stasis,
		hash: 3291545503,
	},
	[EDestinySubclassId.Broodweaver]: {
		id: EDestinySubclassId.Broodweaver,
		name: 'Broodweaver',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/41c0024ce809085ac16f4e0777ea0ac4.png',
		superAbilityIdList: [ESuperAbilityId.Needlestorm],
		destinyClassId: EDestinyClassId.Warlock,
		elementId: EElementId.Strand,
		hash: 4204413574,
	},
	[EDestinySubclassId.Striker]: {
		id: EDestinySubclassId.Striker,
		name: 'Striker',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/83c478558665bbadd251d80d3d05bc2e.png',
		superAbilityIdList: [
			ESuperAbilityId.Thundercrash,
			ESuperAbilityId.FistsOfHavoc,
		],
		destinyClassId: EDestinyClassId.Titan,
		elementId: EElementId.Arc,
		hash: 2932390016,
	},
	[EDestinySubclassId.Sentinel]: {
		id: EDestinySubclassId.Sentinel,
		name: 'Sentinel',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/fa3084d2798d59db7b3419a2fae1bf0c.png',
		superAbilityIdList: [
			ESuperAbilityId.SentinelShield,
			ESuperAbilityId.WardOfDawn,
		],
		destinyClassId: EDestinyClassId.Titan,
		elementId: EElementId.Void,
		hash: 2842471112,
	},
	[EDestinySubclassId.Sunbreaker]: {
		id: EDestinySubclassId.Sunbreaker,
		name: 'Sunbreaker',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/fedcb91b7ab0584c12f0e9fec730702b.png',
		superAbilityIdList: [
			ESuperAbilityId.BurningMaul,
			ESuperAbilityId.HammerOfSol,
		],
		destinyClassId: EDestinyClassId.Titan,
		elementId: EElementId.Solar,
		hash: 2550323932,
	},
	[EDestinySubclassId.Behemoth]: {
		id: EDestinySubclassId.Behemoth,
		name: 'Behemoth',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/3c0dc830b83a9f3e9a52b7bea4494f64.png',
		superAbilityIdList: [ESuperAbilityId.GlacialQuake],
		destinyClassId: EDestinyClassId.Titan,
		elementId: EElementId.Stasis,
		hash: 613647804,
	},
	[EDestinySubclassId.Berserker]: {
		id: EDestinySubclassId.Berserker,
		name: 'Berserker',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/41c0024ce809085ac16f4e0777ea0ac4.png',
		superAbilityIdList: [ESuperAbilityId.Bladefury],
		destinyClassId: EDestinyClassId.Titan,
		elementId: EElementId.Strand,
		hash: 242419885,
	},
	[EDestinySubclassId.Gunslinger]: {
		id: EDestinySubclassId.Gunslinger,
		name: 'Gunslinger',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/fedcb91b7ab0584c12f0e9fec730702b.png',
		superAbilityIdList: [
			ESuperAbilityId.BladeBarrage,
			ESuperAbilityId.GoldenGunDeadshot,
			ESuperAbilityId.GoldenGunMarksman,
		],
		destinyClassId: EDestinyClassId.Hunter,
		elementId: EElementId.Solar,
		hash: 2240888816,
	},
	[EDestinySubclassId.Nightstalker]: {
		id: EDestinySubclassId.Nightstalker,
		name: 'Nightstalker',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/fa3084d2798d59db7b3419a2fae1bf0c.png',
		superAbilityIdList: [
			ESuperAbilityId.ShadowshotDeadfall,
			ESuperAbilityId.ShadowshotMoebiusQuiver,
			,
			ESuperAbilityId.SpectralBlades,
		],
		destinyClassId: EDestinyClassId.Hunter,
		elementId: EElementId.Void,
		hash: 2453351420,
	},
	[EDestinySubclassId.Arcstrider]: {
		id: EDestinySubclassId.Arcstrider,
		name: 'Arcstrider',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/83c478558665bbadd251d80d3d05bc2e.png',
		superAbilityIdList: [
			ESuperAbilityId.ArcStaff,
			ESuperAbilityId.GatheringStorm,
		],
		destinyClassId: EDestinyClassId.Hunter,
		elementId: EElementId.Arc,
		hash: 2328211300,
	},
	[EDestinySubclassId.Revenant]: {
		id: EDestinySubclassId.Revenant,
		name: 'Revenant',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/3c0dc830b83a9f3e9a52b7bea4494f64.png',
		superAbilityIdList: [ESuperAbilityId.SilenceAndSquall],
		destinyClassId: EDestinyClassId.Hunter,
		elementId: EElementId.Stasis,
		hash: 873720784,
	},
	[EDestinySubclassId.Threadrunner]: {
		id: EDestinySubclassId.Threadrunner,
		name: 'Threadrunner',
		icon: 'https://www.bungie.net/common/destiny2_content/icons/41c0024ce809085ac16f4e0777ea0ac4.png',
		superAbilityIdList: [ESuperAbilityId.Silkstrike],
		destinyClassId: EDestinyClassId.Hunter,
		elementId: EElementId.Strand,
		hash: 3785442599,
	},
};

export const getDestinySubclass = (id: EDestinySubclassId): IDestinySubclass =>
	DestinySubclassIdToDestinySubclassMapping[id];

/******* Extra *******/

export const DestinySubclassElementIds = [
	EElementId.Arc,
	EElementId.Solar,
	EElementId.Void,
	EElementId.Stasis,
	EElementId.Strand,
];
