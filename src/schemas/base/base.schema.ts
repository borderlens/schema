import { z } from "zod";

import { Aliases } from "#src/schemas/base/aliases/index.js";
import { Content } from "#src/schemas/base/content/index.js";
import { Description } from "#src/schemas/base/description/index.js";
import { Element } from "#src/schemas/base/element/index.js";
import { Game } from "#src/schemas/base/game/index.js";
import { Id } from "#src/schemas/base/id/index.js";
import { Manufacturer } from "#src/schemas/base/manufacturer/index.js";
import { Name } from "#src/schemas/base/name/index.js";
import { Rarity } from "#src/schemas/base/rarity/index.js";
import { Slug } from "#src/schemas/base/slug/index.js";
import { Sources } from "#src/schemas/base/sources/index.js";
import { Summary } from "#src/schemas/base/summary/index.js";
import { Tags } from "#src/schemas/base/tags/index.js";
import { Versions } from "#src/schemas/base/versions/index.js";

export const Base = z.object({
  id: Id,
  versions: Versions,
  sources: Sources.optional(),
  games: z.array(Game).min(1),
  content: Content,
  aliases: Aliases.optional(),
  tags: Tags.optional(),
  name: Name,
  slug: Slug,
  summary: Summary,
  description: Description,
  manufacturers: z.array(Manufacturer).min(1),
  rarities: z.array(Rarity).min(1),
  elements: z.array(Element),
});