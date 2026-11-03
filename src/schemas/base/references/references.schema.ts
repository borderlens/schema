import { z } from "zod";

export const References = z.object({
  lootlemon: z.url().optional(),
  wiki: z.url().optional(),
}).describe("External pages for this exact item. `lootlemon` is the item's LootLemon page. `wiki` is its wiki page (Borderlands Wiki or the edition's equivalent). Use the direct item URL, not a search, category, or homepage. Omit a key when no page was found. Do not invent or guess a URL.");