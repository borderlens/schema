import { z } from "zod";

export const GrenadeMod = z.enum([
  "bouncing-bettie",
  "contact",
  "longbow",
  "mirv",
  "proximity-mine",
  "rain",
  "rubberized",
  "sticky",
  "transfusion",
]).describe("How the grenade is delivered, not its element or manufacturer. contact explodes on impact. sticky attaches, then explodes on its fuse. proximity-mine waits for a target. longbow teleports to the aim point. rubberized bounces. bouncing-bettie is the bouncing child-grenade pattern, and a Bouncing Betty is bouncing-bettie. mirv splits in the air. rain drops child grenades from above. transfusion restores health to the thrower, even when it also deals damage.");
