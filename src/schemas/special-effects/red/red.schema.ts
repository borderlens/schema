import { z } from "zod";

import { String } from "#utils";

export const Red = z.object({
  title: String.Line,
  summary: String.Line,
  description: z.array(String.Line).optional(),
  self: z.boolean().default(false),
}).describe("The item's unique red text, usually on legendary items and above. `title` is the red text itself, not a second summary. `summary` is one line saying what the effect does, and `description` is the longer write-up when that line is not enough. Set `self` to true when the effect applies to the wielder, whether it helps or hurts them, and false when it applies to enemies or other targets.");
