import { z } from "zod";

export const GrenadeMod = z.enum([
  "bouncing-bettie",
  "contact",
  "longbow",
  "mirv",
  "proximity-mine",
  "rain",
  "rubberized",
  "sticky",
  "transfusion",
]);
