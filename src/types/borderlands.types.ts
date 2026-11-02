import { z } from "zod";

import { Borderlands } from "#src/schemas/index.js";

export type Weapon = z.infer<typeof Borderlands.Weapon>;