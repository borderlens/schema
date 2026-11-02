import { z } from "zod";

import { Aliases } from "#src/schemas/base/aliases/index.js";
import { Content } from "#src/schemas/base/content/index.js";
import { Game } from "#src/schemas/base/game/index.js";
import { Id } from "#src/schemas/base/id/index.js";
import { Sources } from "#src/schemas/base/sources/index.js";
import { Versions } from "#src/schemas/base/versions/index.js";

export const Base = z.object({
  id: Id,
  versions: Versions,
  sources: Sources.optional(),
  game: z.array(Game).min(1),
  content: Content,
  aliases: Aliases.optional(),
});