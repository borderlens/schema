import { z } from "zod";

export const Shield = z.enum([
  "burst",
  "healing",
  "nova",
  "resistance",
  "standard",
  "wave",
]).describe("The shield's defensive behaviour, not its manufacturer, element, or capacity. Use standard when it only absorbs damage and recharges. resistance is elemental resistance. healing restores health. nova is an area blast when the shield breaks, burst is a directed burst, and wave sends a wave. A fire nova is still nova.");
