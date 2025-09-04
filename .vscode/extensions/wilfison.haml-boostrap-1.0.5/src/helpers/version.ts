import { readFileSync } from "node:fs";
import path from "node:path";

export function readLocalCssFile(rootPath: string): string {
  return readFileSync(path.join(rootPath, 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'), 'utf8');
}

export function findVersionAndLocation(lib: string, rootPath: string): Array<string> {
  let bsVersion: string | null = findVersionOnNodeModules(lib, rootPath);
  const location = bsVersion ? 'local' : 'remote';

  if (!bsVersion) {
    bsVersion = findVersionOnGemfileLock(lib, rootPath);
  }

  return [bsVersion || 'latest', location];
}

function findVersionOnNodeModules(lib: string, rootPath: string): string | null {
  try {
    const bsVersion = require(path.join(rootPath, 'node_modules', lib, 'package.json')).version;
    return bsVersion;
  } catch (error) {
    return null;
  }
}

function findVersionOnGemfileLock(lib: string, rootPath: string): string | null {
  const regex = new RegExp(`${lib} \\((\\d+\\.\\d+\\.\\d+)\\)`);

  try {
    const fileContent = readFileSync(path.join(rootPath, 'Gemfile.lock'), 'utf8');
    const match = fileContent.match(regex);

    return match ? match[1] : null;
  } catch (error) {
    return null;
  }
}
