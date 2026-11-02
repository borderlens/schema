import { z } from "zod";

import { Array } from "#utils";

import { Element } from "#src/schemas/base/element/index.js";

export const Modifiers = z.object({
  projectileCount: z.object({
    range: Array.OneOrTwoNumbers,
  }).optional().describe("Projectiles per shot, including shotgun pellets. Shown beside damage as `x{N}`. This is not necessarily ammo consumed per shot. E.g. Bone Shredder is always [2]. Omit when the item fires a single projectile."),
  elementMultiplier: z.object({
    element: Element.exclude(["none"]),
    range: Array.OneOrTwoNumbers,
  }).optional().describe("Elemental effect rating for `element`, shown as `x{N}` beside the element icon. This is the tech rating that drives elemental procs, not the element damage percent. It is usually [1, 4]. Omit when the item has no elemental rating."),
}).describe("Card modifiers shown as `x{N}`. `range` is the fixed value or the roll. Omit a key the item does not have. Do not put special-effect prose here.");
