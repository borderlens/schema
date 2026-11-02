import { z } from "zod";

export const Slug = z.stringFormat("slug", /^[a-z0-9]+(?:-[a-z0-9]+)*$/).describe("Lowercase slug: one or more segments of letters or digits, joined by single hyphens. No spaces, underscores, uppercase, leading or trailing hyphens, or empty segments.");
export const Semvar = z.stringFormat("semver", /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/).describe("Strict MAJOR.MINOR.PATCH version. Three non-negative integers separated by dots, with no leading zeros. Do not add a v prefix, pre-release tag, or build metadata.");
export const Line = z.string().regex(/^[^\r\n]*\S[^\r\n]*$/).describe("One line of text. It must contain at least one non-whitespace character and must not include a line break. Do not emit a blank or whitespace-only line.");