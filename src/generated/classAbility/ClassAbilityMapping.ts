// This file is generated by the generateClassAbilityMapping.ts script.
// Do not manually make changes to this file.

import { EnumDictionary } from "@dlb/types/globals";
import { IClassAbility } from "@dlb/types/generation";
import { EClassAbilityId } from "@dlb/generated/classAbility/EClassAbilityId";
import { EElementId, EDestinySubclassId } from "@dlb/types/IdEnums";

export const ClassAbilityIdToClassAbilityMapping: EnumDictionary<
  EClassAbilityId,
  IClassAbility
> = {
  [EClassAbilityId.EmpoweringRiftArc]: {
    name: "Empowering Rift",
    id: EClassAbilityId.EmpoweringRiftArc,
    description:
      "Conjure a well of power that increases weapon damage for those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/f631796f82ace46e7db45bac7ca69e88.jpg",
    hash: 25156514,
    elementId: EElementId.Arc,
    destinySubclassId: EDestinySubclassId.Stormcaller,
  },
  [EClassAbilityId.HealingRiftArc]: {
    name: "Healing Rift",
    id: EClassAbilityId.HealingRiftArc,
    description:
      "Conjure a well of power that continuously heals those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/8b1e33b126c4b552ee232cd021fd21a3.jpg",
    hash: 25156515,
    elementId: EElementId.Arc,
    destinySubclassId: EDestinySubclassId.Stormcaller,
  },
  [EClassAbilityId.HealingRiftStrand]: {
    name: "Healing Rift",
    id: EClassAbilityId.HealingRiftStrand,
    description:
      "Conjure a well of power that continuously heals those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/feefb41e76f8d550b201c93e8d050cb1.png",
    hash: 383852320,
    elementId: EElementId.Strand,
    destinySubclassId: EDestinySubclassId.Broodweaver,
  },
  [EClassAbilityId.EmpoweringRiftStrand]: {
    name: "Empowering Rift",
    id: EClassAbilityId.EmpoweringRiftStrand,
    description:
      "Conjure a well of power that increases weapon damage for those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/5d874462f91e55c074d41c64ad475ade.png",
    hash: 383852321,
    elementId: EElementId.Strand,
    destinySubclassId: EDestinySubclassId.Broodweaver,
  },
  [EClassAbilityId.MarksmansDodgeArc]: {
    name: "Marksman's Dodge",
    id: EClassAbilityId.MarksmansDodgeArc,
    description:
      "Dodge to perform an evasive maneuver with a steady hand. Dodging automatically reloads your weapon.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/42d04af758af600bc9116f4f76503463.jpg",
    hash: 426473316,
    elementId: EElementId.Arc,
    destinySubclassId: EDestinySubclassId.Arcstrider,
  },
  [EClassAbilityId.GamblersDodgeArc]: {
    name: "Gambler's Dodge",
    id: EClassAbilityId.GamblersDodgeArc,
    description:
      "Dodge to perform a deft tumble, avoiding enemy attacks. Dodging near enemies fully recharges your Melee Ability.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/edbabd1bdba4846ff5bfb0f7b272627a.jpg",
    hash: 426473317,
    elementId: EElementId.Arc,
    destinySubclassId: EDestinySubclassId.Arcstrider,
  },
  [EClassAbilityId.ToweringBarricadeArc]: {
    name: "Towering Barricade",
    id: EClassAbilityId.ToweringBarricadeArc,
    description:
      "Create a large barrier that can be used to reinforce a position with cover from enemy fire.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/d2fee1e6e74be34076ea6ea1a0943722.jpg",
    hash: 489583096,
    elementId: EElementId.Arc,
    destinySubclassId: EDestinySubclassId.Striker,
  },
  [EClassAbilityId.RallyBarricadeArc]: {
    name: "Rally Barricade",
    id: EClassAbilityId.RallyBarricadeArc,
    description:
      "Create a small barrier that you can peek over while aiming down sights and that increases weapon reload speed, stability, and range when you stand behind it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/511e28fd7b108633c836fac32a9ba05a.jpg",
    hash: 489583097,
    elementId: EElementId.Arc,
    destinySubclassId: EDestinySubclassId.Striker,
  },
  [EClassAbilityId.ThrusterArc]: {
    name: "Thruster",
    id: EClassAbilityId.ThrusterArc,
    description: "While grounded, quickly evade in a lateral direction.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/76b275a4b8547f96bba2b7324b0fc4a0.jpg",
    hash: 489583098,
    elementId: EElementId.Arc,
    destinySubclassId: EDestinySubclassId.Striker,
  },
  [EClassAbilityId.GamblersDodgeStrand]: {
    name: "Gambler's Dodge",
    id: EClassAbilityId.GamblersDodgeStrand,
    description:
      "Dodge to perform a deft tumble, avoiding enemy attacks. Dodging near enemies fully recharges your Melee Ability.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/3b3b077b3d01d0f1782982451815f770.png",
    hash: 1282157890,
    elementId: EElementId.Strand,
    destinySubclassId: EDestinySubclassId.Threadrunner,
  },
  [EClassAbilityId.MarksmansDodgeStrand]: {
    name: "Marksman's Dodge",
    id: EClassAbilityId.MarksmansDodgeStrand,
    description:
      "Dodge to perform an evasive maneuver with a steady hand. Dodging automatically reloads your weapon.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/3ab0fd209b6bd5fe15b3c6d9d58ccb9b.png",
    hash: 1282157891,
    elementId: EElementId.Strand,
    destinySubclassId: EDestinySubclassId.Threadrunner,
  },
  [EClassAbilityId.RallyBarricadeStrand]: {
    name: "Rally Barricade",
    id: EClassAbilityId.RallyBarricadeStrand,
    description:
      "Create a small barrier that you can peek over while aiming down sights and that increases weapon reload speed, stability, and range when you stand behind it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/ced8899f7ff33bf58c0e0ec5c5da5666.png",
    hash: 2087010644,
    elementId: EElementId.Strand,
    destinySubclassId: EDestinySubclassId.Berserker,
  },
  [EClassAbilityId.ToweringBarricadeStrand]: {
    name: "Towering Barricade",
    id: EClassAbilityId.ToweringBarricadeStrand,
    description:
      "Create a large barrier that can be used to reinforce a position with cover from enemy fire.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/ac96e6784aee2e7011c720eca39fd531.png",
    hash: 2087010645,
    elementId: EElementId.Strand,
    destinySubclassId: EDestinySubclassId.Berserker,
  },
  [EClassAbilityId.EmpoweringRiftVoid]: {
    name: "Empowering Rift",
    id: EClassAbilityId.EmpoweringRiftVoid,
    description:
      "Conjure a well of power that increases weapon damage for those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/eaccd2b0e0321fa9842313d188ddc2ef.jpg",
    hash: 2209081648,
    elementId: EElementId.Void,
    destinySubclassId: EDestinySubclassId.Voidwalker,
  },
  [EClassAbilityId.HealingRiftVoid]: {
    name: "Healing Rift",
    id: EClassAbilityId.HealingRiftVoid,
    description:
      "Conjure a well of power that continuously heals those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/725c7d76abfb19121f358c04bbd623dc.jpg",
    hash: 2209081649,
    elementId: EElementId.Void,
    destinySubclassId: EDestinySubclassId.Voidwalker,
  },
  [EClassAbilityId.ToweringBarricadeSolar]: {
    name: "Towering Barricade",
    id: EClassAbilityId.ToweringBarricadeSolar,
    description:
      "Create a large barrier that can be used to reinforce a position with cover from enemy fire.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/aca794c2a4ca7ee45bdb596c68243a89.jpg",
    hash: 2495523340,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Sunbreaker,
  },
  [EClassAbilityId.RallyBarricadeSolar]: {
    name: "Rally Barricade",
    id: EClassAbilityId.RallyBarricadeSolar,
    description:
      "Create a small barrier that you can peek over while aiming down sights and that increases weapon reload speed, stability, and range when you stand behind it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/a1e53d747b9eaf2e3cbb5db2b1963e48.jpg",
    hash: 2495523341,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Sunbreaker,
  },
  [EClassAbilityId.ToweringBarricadeVoid]: {
    name: "Towering Barricade",
    id: EClassAbilityId.ToweringBarricadeVoid,
    description:
      "Create a large barrier that can be used to reinforce a position with cover from enemy fire.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/20342b719c0692b003401cb457de5d08.jpg",
    hash: 2722641740,
    elementId: EElementId.Void,
    destinySubclassId: EDestinySubclassId.Sentinel,
  },
  [EClassAbilityId.RallyBarricadeVoid]: {
    name: "Rally Barricade",
    id: EClassAbilityId.RallyBarricadeVoid,
    description:
      "Create a small barrier that you can peek over while aiming down sights and that increases weapon reload speed, stability, and range when you stand behind it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/a3d7491049c20609490ecd337c4d4575.jpg",
    hash: 2722641741,
    elementId: EElementId.Void,
    destinySubclassId: EDestinySubclassId.Sentinel,
  },
  [EClassAbilityId.MarksmansDodgeVoid]: {
    name: "Marksman's Dodge",
    id: EClassAbilityId.MarksmansDodgeVoid,
    description:
      "Dodge to perform an evasive maneuver with a steady hand. Dodging automatically reloads your weapon.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/bca550b5e1e2db9e3ec358c22f6984c0.jpg",
    hash: 2816982784,
    elementId: EElementId.Void,
    destinySubclassId: EDestinySubclassId.Nightstalker,
  },
  [EClassAbilityId.GamblersDodgeVoid]: {
    name: "Gambler's Dodge",
    id: EClassAbilityId.GamblersDodgeVoid,
    description:
      "Dodge to perform a deft tumble, avoiding enemy attacks. Dodging near enemies fully recharges your Melee Ability.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/3536ce85290691269b0fabac3d7e760d.jpg",
    hash: 2816982785,
    elementId: EElementId.Void,
    destinySubclassId: EDestinySubclassId.Nightstalker,
  },
  [EClassAbilityId.PhoenixDiveSolar]: {
    name: "Phoenix Dive",
    id: EClassAbilityId.PhoenixDiveSolar,
    description:
      "Dive to the ground and create a burst of Solar Light that cures nearby allies.\n\nWhile Heat Rises is active, you gain restoration while diving and scorch targets upon landing.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/85ef85819a19d528c86a6329ea895fb5.jpg",
    hash: 2979486801,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Dawnblade,
  },
  [EClassAbilityId.EmpoweringRiftSolar]: {
    name: "Empowering Rift",
    id: EClassAbilityId.EmpoweringRiftSolar,
    description:
      "Conjure a well of power that increases weapon damage for those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/f606abdd0247debab5073a48f71672df.jpg",
    hash: 2979486802,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Dawnblade,
  },
  [EClassAbilityId.HealingRiftSolar]: {
    name: "Healing Rift",
    id: EClassAbilityId.HealingRiftSolar,
    description:
      "Conjure a well of power that continuously heals those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/ab46c7eb6138308a593b396b389d75ce.jpg",
    hash: 2979486803,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Dawnblade,
  },
  [EClassAbilityId.ToweringBarricadeStasis]: {
    name: "Towering Barricade",
    id: EClassAbilityId.ToweringBarricadeStasis,
    description:
      "Create a large barrier that can be used to reinforce a position with cover from enemy fire.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/ac96e6784aee2e7011c720eca39fd531.png",
    hash: 3260056808,
    elementId: EElementId.Stasis,
    destinySubclassId: EDestinySubclassId.Behemoth,
  },
  [EClassAbilityId.RallyBarricadeStasis]: {
    name: "Rally Barricade",
    id: EClassAbilityId.RallyBarricadeStasis,
    description:
      "Create a small barrier that you can peek over while aiming down sights and that increases weapon reload speed, stability, and range when you stand behind it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/ced8899f7ff33bf58c0e0ec5c5da5666.png",
    hash: 3260056809,
    elementId: EElementId.Stasis,
    destinySubclassId: EDestinySubclassId.Behemoth,
  },
  [EClassAbilityId.EmpoweringRiftStasis]: {
    name: "Empowering Rift",
    id: EClassAbilityId.EmpoweringRiftStasis,
    description:
      "Conjure a well of power that increases weapon damage for those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/5d874462f91e55c074d41c64ad475ade.png",
    hash: 3492047640,
    elementId: EElementId.Stasis,
    destinySubclassId: EDestinySubclassId.Shadebinder,
  },
  [EClassAbilityId.HealingRiftStasis]: {
    name: "Healing Rift",
    id: EClassAbilityId.HealingRiftStasis,
    description:
      "Conjure a well of power that continuously heals those inside it.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/feefb41e76f8d550b201c93e8d050cb1.png",
    hash: 3492047641,
    elementId: EElementId.Stasis,
    destinySubclassId: EDestinySubclassId.Shadebinder,
  },
  [EClassAbilityId.AcrobatsDodgeSolar]: {
    name: "Acrobat's Dodge",
    id: EClassAbilityId.AcrobatsDodgeSolar,
    description:
      "Dodge to perform an acrobatic leap. Upon landing, make yourself and nearby allies radiant.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/18b507607e6971bb10fec7addc24786b.jpg",
    hash: 3636300852,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Gunslinger,
  },
  [EClassAbilityId.MarksmansDodgeSolar]: {
    name: "Marksman's Dodge",
    id: EClassAbilityId.MarksmansDodgeSolar,
    description:
      "Dodge to perform an evasive maneuver with a steady hand. Dodging automatically reloads your weapon.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/fa8364dbc5fd5bf175bd2107c72dd171.jpg",
    hash: 3636300854,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Gunslinger,
  },
  [EClassAbilityId.GamblersDodgeSolar]: {
    name: "Gambler's Dodge",
    id: EClassAbilityId.GamblersDodgeSolar,
    description:
      "Dodge to perform a deft tumble, avoiding enemy attacks. Dodging near enemies fully recharges your Melee Ability.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/8a6b9c02f527bfd3b5dba6ca9b88e9b0.jpg",
    hash: 3636300855,
    elementId: EElementId.Solar,
    destinySubclassId: EDestinySubclassId.Gunslinger,
  },
  [EClassAbilityId.MarksmansDodgeStasis]: {
    name: "Marksman's Dodge",
    id: EClassAbilityId.MarksmansDodgeStasis,
    description:
      "Dodge to perform an evasive maneuver with a steady hand. Dodging automatically reloads your weapon.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/3ab0fd209b6bd5fe15b3c6d9d58ccb9b.png",
    hash: 3933525366,
    elementId: EElementId.Stasis,
    destinySubclassId: EDestinySubclassId.Revenant,
  },
  [EClassAbilityId.GamblersDodgeStasis]: {
    name: "Gambler's Dodge",
    id: EClassAbilityId.GamblersDodgeStasis,
    description:
      "Dodge to perform a deft tumble, avoiding enemy attacks. Dodging near enemies fully recharges your Melee Ability.",
    icon: "https://www.bungie.net/common/destiny2_content/icons/3b3b077b3d01d0f1782982451815f770.png",
    hash: 3933525367,
    elementId: EElementId.Stasis,
    destinySubclassId: EDestinySubclassId.Revenant,
  },
};
