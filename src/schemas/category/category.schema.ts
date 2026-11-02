import { z } from "zod";

export const Category = z.enum([
  "artifact",
  "class-mod",
  "grenade-mod",
  "shield",
  "weapon",
  "other",
]).describe("The item's top-level type. This is not the weapon subtype, manufacturer, or rarity. Use other only when the item is none of the named types (e.g. SDU). A weapon is weapon even when its subtype is unusual.");
