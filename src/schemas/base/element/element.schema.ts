import { z } from "zod";

export const Element = z.enum([
  "none",
  "incendiary",
  "corrosive",
  "shock",
  "explosive",
]).describe("One element this item can spawn with. Fire is incendiary, not a separate value. List every element it can actually roll. Use an empty list when it never spawns with an element - do not add none for that. Add none only alongside one or more real elements. 'none' on its own is not valid.");
