import { z } from "zod";

export const Shield = z.enum([
  "burst",
  "healing",
  "nova",
  "resistance",
  "standard",
  "wave",
]);
