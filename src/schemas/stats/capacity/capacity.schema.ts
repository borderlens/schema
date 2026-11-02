import { Array } from "#utils";

export const Capacity = Array.OneOrTwoNumbers.describe("The item's capacity across the levels and parts it can spawn with. Use [min, max] for the lowest and highest it can reach. Use [n] when capacity does not change. This is the amount the item holds or absorbs, not a recharge rate, a recharge delay, or a part bonus. One dropped card is not the range.");