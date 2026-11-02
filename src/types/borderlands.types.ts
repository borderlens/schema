import { z } from "zod";

import { Artifact, ClassMod, GrenadeMod, Shield, Weapon } from "#src/schemas/borderlands.schema.js";

export type Artifact = z.infer<typeof Artifact>;
export type ClassMod = z.infer<typeof ClassMod>;
export type GrenadeMod = z.infer<typeof GrenadeMod>;
export type Shield = z.infer<typeof Shield>;
export type Weapon = z.infer<typeof Weapon>;