import { z } from "zod";

import { String } from "#utils";

export const Acquisition = z.object({
  name: z.string().trim().nonempty().describe("Who or what gives this item, such as an enemy, a mission, or a chest. Use that source's name, not the item name and not the location on its own."),
  summary: String.Line.optional().describe("One line on this source, when the name is not enough. A unique enemy, what the mission asks, or where a chest is. Omit it for an ordinary source."),
  description: z.array(String.Line).optional().describe("More about this source, one paragraph per entry. Who a unique enemy is, or how the mission reward is earned. Omit it when the summary is enough. Do not repeat the drop chance or the item."),
  tags: z.array(z.string().trim().nonempty()).optional().describe("Short labels for this drop, such as a location, an enemy type, or a playthrough. This is not a search keyword and not a player count. Omit when the source name is enough. Detail about the enemy or mission goes on summary and description, not here."),
  dropPercentage: z.number().int().optional().describe("One drop chance for this source, as a whole percent from 1 to 100, rounded up. Omit it when the chance is unknown or the source gives a weight rather than a percent. Do not use 0 for unknown, and do not record a separate player-count rate."),
}).describe("One way to obtain this item. One source, one percent. A loot-pool weight is not a percent.");
