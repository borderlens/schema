import { z } from "zod";

export const Class = z.enum([
  "berserker",
  "hunter",
  "siren",
  "soldier",
]);
