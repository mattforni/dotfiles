#!/usr/bin/env node
/*
 * Builds one runner's bundle of the renderer: render.tsx, that runner's page,
 * and the failure page, as one CommonJS file.
 *
 *   RUNNER=retro npm run build        an image's first stage, and a local run
 *   node build.mjs retro recruiter    several at once, which is what the tests do
 *
 * A bundle carries one page and not all of them, so an image holds only what
 * its own runner mails and a page can live with its runner in another
 * repository: the page is <name>.tsx beside this file, wherever it came from,
 * and it exports `page`. render.tsx imports it as "runner-page", and the alias
 * below is the only place that name is given a file.
 *
 * CommonJS on purpose. An ESM bundle died at startup on node 20 with "Dynamic
 * require of util is not supported": React's server renderer reaches for a
 * require that an ESM bundle cannot answer.
 */

import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const HERE = dirname(fileURLToPath(import.meta.url));

function die(message) {
	process.stderr.write(`build: ${message}\n`);
	process.exit(1);
}

const named = process.argv.slice(2);
const runners = named.length > 0 ? named : (process.env.RUNNER ?? "").split(/\s+/).filter(Boolean);
if (runners.length === 0) die("no runner named; set RUNNER or pass a name, since a bundle carries one runner's page");

for (const runner of runners) {
	// The name becomes a file name twice over, so it is held to what a
	// runner directory is ever called.
	if (!/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(runner)) die(`"${runner}" is not a runner name`);
	if (runner === "failure") die('"failure" is the failure page, which every bundle already carries');
	if (!existsSync(join(HERE, `${runner}.tsx`))) die(`no page for "${runner}": ${runner}.tsx is not beside render.tsx`);

	await build({
		absWorkingDir: HERE,
		entryPoints: ["render.tsx"],
		outfile: `dist/render-${runner}.cjs`,
		bundle: true,
		platform: "node",
		format: "cjs",
		target: "node24",
		jsx: "automatic",
		minifySyntax: true,
		alias: { "runner-page": `./${runner}.tsx` },
		define: {
			"process.env.NODE_ENV": '"production"',
			RUNNER_NAME: JSON.stringify(runner),
		},
		logLevel: "warning",
	}).catch(() => process.exit(1));
}
