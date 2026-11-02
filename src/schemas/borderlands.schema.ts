import { z } from "zod";

import { Base } from "#base";

import { Category, SubCategories } from "#category";
import { Accuracy, Damage, FireRate, Magazine } from "#stats";

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
    ]).describe("Weapon type for this game. Only these subtypes are valid here. The shared weapon list also holds subtypes from other games; do not use those on this entry, and do not fold one into the nearest type in this list."),
  }),
  stats: z.object({
    damage: Damage,
    accuracy: Accuracy,
    fireRate: FireRate,
    magazine: Magazine,
  }),
});