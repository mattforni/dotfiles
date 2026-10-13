/*
 * The page a bundle is built around. No file has this name: build.mjs points
 * it at <runner>.tsx for the bundle being built, which is how render.tsx
 * imports whichever page that is without naming any of them.
 */
declare module "runner-page" {
	export const page: import("./types").Page;
}
