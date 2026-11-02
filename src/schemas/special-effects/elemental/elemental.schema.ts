import { z } from "zod";

import { String } from "#utils";

import { Element } from "#src/schemas/base/element/index.js";

export const Elemental = z.array(z.object({
  element: Element.exclude(["none"]),
  summary: String.Line,
  description: z.array(String.Line).optional(),
  self: z.boolean().default(false),
})).describe("Elemental behaviour tied to one element, such as splash. One entry per element. `element` is the label, so there is no title. Do not put damage-over-time or other status effects here. `summary` is one line saying what the effect does, and `description` is the longer write-up when that line is not enough. Set `self` to true when the effect applies to the wielder, whether it helps or hurts them, and false when it applies to enemies or other targets.");
