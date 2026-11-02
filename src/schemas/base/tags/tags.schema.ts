import { z } from "zod";

export const Tags = z.array(z.string()).describe("Search keywords only. Indexed by the search engine (Fuse.js initially), not shown as item content.");