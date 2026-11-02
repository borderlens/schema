import { z } from "zod";

import { String } from "#utils";

export const Part = z.object({
  name: z.string().trim().nonempty().describe("The part's name as the source gives it, such as Body_1 or Twisted. Keep a numbered part numbered. Do not invent a friendly name, and do not put a modifier in the name."),
  modifiers: z.array(z.object({
    summary: String.Line.describe("One change this part applies, as a short signed line such as \"+10% Damage\" or \"-20% Fire Rate\". One change per entry. Do not merge several changes into one line."),
    benefit: z.boolean().describe("True when this change helps the wielder, false when it hurts them. Judge this line on its own. Higher recoil, higher spread, or lower damage is false even when the rest of the part is worth using."),
  })),
}).describe("One part this item can spawn with. List only parts of this item. Use an empty modifiers array when a part has no listed changes. Do not put the item's card stats or special effects here.");