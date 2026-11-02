import { z } from "zod";

import { String } from "#utils";

export const Status = z.array(z.object({
  title: String.Line,
  summary: String.Line,
  description: z.array(String.Line).optional(),
  self: z.boolean().default(false),
})).describe("Status effects this item can apply, such as ignite, corrosion, electrocute, dazed, slimed etc. `title` is the status name, not a second summary. Do not repeat elemental behaviour that belongs on an elemental effect. `summary` is one line saying what the effect does, and `description` is the longer write-up when that line is not enough. Set `self` to true when the effect applies to the wielder, whether it helps or hurts them, and false when it applies to enemies or other targets.");
