import { z } from "zod";

import { Base } from "#base";

import { Category, SubCategories } from "#category";
import { Borderlands } from "#class";
import { Accuracy, Capacity, Damage, FireRate, Magazine, RechargeRate } from "#stats";

/**
 * Schema for a Borderlands artifact.
 *
 * @remarks
 * Artifacts are equipment bound to one character class.
 */
export const Artifact = Base.omit({ specialEffects: true, modifiers: true }).extend({
  category: z.object({
    primary: Category.extract(["artifact"]),
    secondary: Borderlands.Character,
  }),
});

/**
 * Schema for a Borderlands class mod.
 *
 * @remarks
 * Class mods are equipment bound to one character class.
 */
export const ClassMod = Base.omit({ modifiers: true }).extend({
  category: z.object({
    primary: Category.extract(["class-mod"]),
    secondary: Borderlands.Character,
  }),
});

/**
 * Schema for a Borderlands grenade mod.
 *
 * @remarks
 * Grenade mods are classified by how the grenade is delivered.
 */
export const GrenadeMod = Base.extend({
  category: z.object({
    primary: Category.extract(["grenade-mod"]),
    secondary: SubCategories.GrenadeMod.extract([
      "bouncing-bettie",
      "contact",
      "longbow",
      "mirv",
      "proximity-mine",
      "rain",
      "rubberized",
      "sticky",
      "transfusion",
    ]),
  }),
  stats: z.object({
    damage: Damage,
  }),
});

/**
 * Schema for a Borderlands shield.
 *
 * @remarks
 * Shields are classified by their defensive behaviour.
 */
export const Shield = Base.extend({
  category: z.object({
    primary: Category.extract(["shield"]),
    secondary: SubCategories.Shield.extract([
      "burst",
      "healing",
      "nova",
      "resistance",
      "standard",
      "wave",
    ]),
  }),
  stats: z.object({
    capacity: Capacity,
    rechargeRate: RechargeRate,
  }),
});

/**
 * Schema for a Borderlands weapon.
 *
 * @remarks
 * Weapons are classified by weapon type and include the combat statistics used to compare them.
 */
export const Weapon = Base.extend({
  category: z.object({
    primary: Category.extract(["weapon"]),
    secondary: SubCategories.Weapon.extract([
      "combat-rifle",
      "eridian-weapon",
      "repeater-pistol",
      "revolver",
      "rocket-launcher",
      "shotgun",
      "smg",
      "sniper-rifle",
    ]),
  }),
  stats: z.object({
    damage: Damage,
    accuracy: Accuracy,
    fireRate: FireRate,
    magazine: Magazine,
  }),
});