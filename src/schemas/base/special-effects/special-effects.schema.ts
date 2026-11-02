import { z } from "zod";

import { String } from "#utils";

import { Element } from "#src/schemas/base/element/index.js";

export const SpecialEffects = z.object({
  red: z.object({
    title: String.Line,
    summary: String.Line,
    description: z.array(String.Line).optional(),
    self: z.boolean().default(false),
  }).optional().describe("The item's unique red text, usually on legendary items and above. `title` is the red text itself. Omit when the item has none."),
  elemental: z.array(z.object({
    element: Element.exclude(["none"]),
    summary: String.Line,
    description: z.array(String.Line).optional(),
    self: z.boolean().default(false),
  })).optional().describe("Elemental behaviour tied to one element, such as splash. One entry per element. `element` is the label, so there is no title. Do not put damage-over-time or other status effects here. Omit when the item has none."),
  status: z.array(z.object({
    title: String.Line,
    summary: String.Line,
    description: z.array(String.Line).optional(),
    self: z.boolean().default(false),
  })).optional().describe("Status effects this item can apply, such as ignite, corrosion, or electrocute. `title` is the status name. Do not repeat elemental behaviour that belongs under `elemental`. Omit when the item has none."),
  other: z.array(z.object({
    title: String.Line,
    summary: String.Line,
    description: z.array(String.Line).optional(),
    self: z.boolean().default(false),
  })).optional().describe("Flavour text that is not red text. `title` is the quote, for example the Carnage shotgun's \"Holy crap! It shoots rockets\". Omit when the item has none."),
}).describe("Special effects on this item. On every entry, `summary` is one line saying what the effect does, and `description` is the longer write-up when that line is not enough. Where `title` exists it is the label or quote, not a second summary. Set `self` to true when the effect applies to the wielder, whether it helps or hurts them, and false when it applies to enemies or other targets. Omit a key that has no entries.");