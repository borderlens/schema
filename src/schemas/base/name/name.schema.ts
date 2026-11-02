import { z } from "zod";

export const Name = z.string().describe("The item's displayed name, as players see it. Keep the in-game spelling, capitalisation, and punctuation. Do not add the manufacturer, rarity, item type, game, or id. Earlier or alternate names belong in aliases, and the slug is derived from this name separately.");