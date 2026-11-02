import { z } from "zod";

export const Class = z.enum([
  "berserker",
  "hunter",
  "siren",
  "soldier",
]).describe("The playable class, not the character's name. berserker is Brick, hunter is Mordecai, siren is Lilith, and soldier is Roland. Use the class even when the source only names the character.");
