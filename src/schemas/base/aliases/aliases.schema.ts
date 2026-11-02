import { z } from "zod";

export const Aliases = z.object({
  slugs: z.array(z.string()),
  names: z.array(z.string()),
}).describe("Earlier names and slugs, such as the Borderlands 2 Lyudmila. Order does not matter on each.");