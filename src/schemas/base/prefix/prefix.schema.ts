import { z } from "zod";

import { String } from "#utils";

export const Prefix = z.object({
  name: z.string().trim().nonempty().describe("The prefix as it appears before the item name, such as Combustion in Combustion Hellfire. Keep the displayed spelling. Do not include the item name, the title, manufacturer or a part name. An element word is not a prefix: in Shock Contact, Shock is the element and Contact is the name."),
  summary: String.Line.optional().describe("One line on what this prefix indicates, when the word alone does not say it. Omit it when the name is enough or the effect is unknown. Do not repeat the part's modifiers."),
}).describe("One prefix this item can show. List every prefix it can roll. A fixed unique prefix is still one entry. This is not the item's title, a part, or its element. Leave the element word out even when it is written in front of the name.");