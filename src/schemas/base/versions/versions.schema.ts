import { z } from "zod";

import { String } from "#utils";

export const Versions = z.object({
  compiler: String.Semvar.describe("Version of the compiler that built this entry, taken from that compiler package's package.json version at build time. Leave it as the version that produced this output; do not substitute the schema package version, the game patch, or the entry revision."),
  revision: z.int().positive().default(1).describe("Content revision of this catalogue entry. Use 1 for a new entry. When replacing an entry that already has a kept revision, set this to that revision plus 1. Do not store the compiler version, schema version, or game patch here."),
});