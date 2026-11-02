import { z } from "zod";

export const Slug = z.stringFormat("slug", /^[a-z0-9]+(?:-[a-z0-9]+)*$/).describe("Lowercase slug: one or more segments of letters or digits, joined by single hyphens. No spaces, underscores, uppercase, leading or trailing hyphens, or empty segments.");
export const Semvar = z.stringFormat("semver", /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/).describe("Strict MAJOR.MINOR.PATCH version. Three non-negative integers separated by dots, with no leading zeros. Do not add a v prefix, pre-release tag, or build metadata.");