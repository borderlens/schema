import { z } from "zod";

import { Weapon } from "#src/schemas/borderlands.schema.js";

export type Weapon = z.infer<typeof Weapon>;