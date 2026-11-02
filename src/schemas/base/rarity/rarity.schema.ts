import { z } from "zod";

export const Rarity = z.enum([
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary",
  "pearlescent",
]).describe("One rarity tier this item can spawn as. Use these ids, not colour names: white is common, green uncommon, blue rare, purple epic, orange legendary, pearl pearlescent. When the item has several legal tiers, list each of them. A maximum-roll label is not a substitute for the other tiers it can still drop as.");
