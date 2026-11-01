import { z } from "zod";

export const Semvar = z.stringFormat("Semvar", /^[a-z0-9]+(?:-[a-z0-9]+)*$/);