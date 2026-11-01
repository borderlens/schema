import { z } from "zod";

import { Weapon } from "#src/schemas/index.js";

export type Weapon = z.infer<typeof Weapon>;