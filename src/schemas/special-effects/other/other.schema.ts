import { z } from "zod";

import { String } from "#utils";

export const Other = z.array(z.object({
  title: String.Line,
  summary: String.Line,
  description: z.array(String.Line).optional(),
  self: z.boolean().default(false),
})).describe("Flavour text that is not red text, and any other effect that does not fit a red, elemental, or status effect. `title` is the quote or a short label, for example the Carnage shotgun's \"Holy crap! It shoots rockets\", not a second summary. Do not repeat an effect that belongs on one of those. `summary` is one line saying what the effect does, and `description` is the longer write-up when that line is not enough. Set `self` to true when the effect applies to the wielder, whether it helps or hurts them, and false when it applies to enemies or other targets.");
