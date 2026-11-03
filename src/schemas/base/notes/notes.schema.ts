import { z } from "zod";

import { String } from "#utils";

export const Notes = z.array(String.Line).describe("Extra facts about this item that do not belong in the description, such as a bug, a quirk, or an exception. Do not repeat the summary, the description, red text, or anything already in a structured field.");