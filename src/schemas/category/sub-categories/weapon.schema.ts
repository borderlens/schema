import { z } from "zod";

export const Weapon = z.enum([
  "combat-rifle",
  "eridian-weapon",
  "repeater-pistol",
  "revolver",
  "rocket-launcher",
  "shotgun",
  "smg",
  "sniper-rifle",
]).describe("The weapon's type, not its ammo pool, proficiency, or manufacturer. An assault rifle is combat-rifle (borderlands 1 at least). A sniper is sniper-rifle. A repeater is repeater-pistol. A revolver stays revolver even when it uses pistol ammo or pistol proficiency. An Eridian gun is eridian-weapon.");
