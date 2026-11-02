import { Array } from "#utils";

export const Damage = Array.OneOrTwoNumbers.describe("The item's damage across the levels and parts it can spawn with. Use [min, max] for the lowest and highest it can reach. Use [n] when damage does not change. This is the whole item's damage, not a part bonus, an elemental multiplier, or damage over time. One dropped card is not the range.");