import { z } from "zod";

import { String } from "#utils";

export const Description = z.array(String.Line).min(1).describe("Full catalogue description of the item, in reading order. Each entry is one paragraph. Cover how the item works and what a reader needs beyond the summary. Do not repeat the summary, quote red text, or restate stats, parts, or acquisition that belong in structured fields.");