import { z } from "zod";

export const Content = z.enum([
  "base",
  "bl-dlc-zombie",
  "bl-dlc-moxxis-underdome",
  "bl-dlc-knoxx",
  "bl-dlc-robot-revolution",
]).describe("Content pack the item comes from: the base game or a named DLC.");