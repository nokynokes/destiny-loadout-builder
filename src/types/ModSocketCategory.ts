import { EModDisplayNameId } from '@dlb/generated/mod/EModDisplayNameId';

import { EnumDictionary } from './globals';
import { EModSocketCategoryId } from './IdEnums';

const EModDisplayNameIdToModSocketCategoryIdMapping: EnumDictionary<
	EModDisplayNameId,
	EModSocketCategoryId
> = {
	[EModDisplayNameId.HelmetArmorMod]: EModSocketCategoryId.ArmorSlot,
	[EModDisplayNameId.ArmsArmorMod]: EModSocketCategoryId.ArmorSlot,
	[EModDisplayNameId.ChestArmorMod]: EModSocketCategoryId.ArmorSlot,
	[EModDisplayNameId.LegArmorMod]: EModSocketCategoryId.ArmorSlot,
	[EModDisplayNameId.ClassItemArmorMod]: EModSocketCategoryId.ArmorSlot,
	[EModDisplayNameId.ClassItemMod]: EModSocketCategoryId.ArmorSlot,

	[EModDisplayNameId.ChargedWithLightMod]: EModSocketCategoryId.CombatStyle,
	[EModDisplayNameId.WarmindCellMod]: EModSocketCategoryId.CombatStyle,
	[EModDisplayNameId.ElementalWellMod]: EModSocketCategoryId.CombatStyle,

	[EModDisplayNameId.LastWishRaidMod]: EModSocketCategoryId.Raid,
	[EModDisplayNameId.GardenOfSalvationRaidMod]: EModSocketCategoryId.Raid,
	[EModDisplayNameId.DeepStoneCryptRaidMod]: EModSocketCategoryId.Raid,
	[EModDisplayNameId.VaultOfGlassArmorMod]: EModSocketCategoryId.Raid,
	[EModDisplayNameId.VowOfTheDiscipleRaidMod]: EModSocketCategoryId.Raid,
	[EModDisplayNameId.KingsFallMod]: EModSocketCategoryId.Raid,

	[EModDisplayNameId.GeneralArmorMod]: EModSocketCategoryId.Stat,
	// TODO: Nightmare mods aren't raid mods. This is wack yo
	[EModDisplayNameId.NightmareMod]: EModSocketCategoryId.Raid,
};

export const getModSocketCategoryIdByModDisplayNameId = (
	id: EModDisplayNameId
): EModSocketCategoryId => EModDisplayNameIdToModSocketCategoryIdMapping[id];
