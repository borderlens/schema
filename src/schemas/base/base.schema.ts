import { z } from "zod";

import { Id } from "#src/schemas/base/id/index.js";
import { Versions } from "#src/schemas/base/versions/index.js";

export const Base = z.object({
  id: Id,
  versions: Versions,
});