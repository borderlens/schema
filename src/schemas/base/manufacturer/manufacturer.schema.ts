import { z } from "zod";

export const Manufacturer = z.enum([
  "anshin",
  "atlas",
  "dahl",
  "eridian",
  "gearbox",
  "hyperion",
  "jakobs",
  "maliwan",
  "pangolin",
  "ss-munitions",
  "tediore",
  "torgue",
  "vladof",
]).describe("Manufacturer id for the brand that makes this item. Use one of these values exactly, not the display name. S&S Munitions is ss-munitions. Do not invent a brand, and do not substitute a part or element for the manufacturer.");
