import { z } from "zod";

export const Character = z.enum([
  "brick",
  "lilith",
  "mordecai",
  "roland",
]).describe("The Borderlands 1 character this item belongs to, not the class name. brick is the Berserker, lilith is the Siren, mordecai is the Hunter, and roland is the Soldier. Use the character even when the source only names the class.");
