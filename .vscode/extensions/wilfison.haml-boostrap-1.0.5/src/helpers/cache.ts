import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";

export function cacheExists(lib: string, version: string): boolean {
  return existsSync(cacheFileLocation(lib, version));
}

export function readCache(lib: string, version: string): string {
  return readFileSync(cacheFileLocation(lib, version), 'utf8');
}

export function writeCache(lib: string, version: string, content: Array<string>) {
  try {
    const fileContent = JSON.stringify(content);
    const fileLocation = cacheFileLocation(lib, version);

    return writeFileSync(fileLocation, fileContent);
  } catch (error) {
    console.error(`Error writing cache file: ${error}`);
  }
}

export function deleteCache(lib: string, version: string) {
  try {
    const fileLocation = cacheFileLocation(lib, version);

    if (cacheExists(lib, version)) {
      return unlinkSync(fileLocation);
    }
  } catch (error) {
    console.error(`Error deleting cache file: ${error}`);
  }
}

function cacheFileLocation(lib: string, version: string): string {
  return path.join(cacheDirectory(), `${lib}-${version}.json`);
}

function cacheDirectory() {
  let cacheDir: string;

  switch (process.platform) {
    case 'darwin':
      cacheDir = path.join(os.homedir(), 'Library', 'Caches', 'haml_bootstrap');
      break;
    case 'win32':
      cacheDir = path.join(os.homedir(), 'AppData', 'Local', 'haml_bootstrap');
      break;
    default:
      cacheDir = path.join(os.homedir(), '.cache', 'haml_bootstrap');
  }

  try {
    if (!existsSync(cacheDir)) {
      mkdirSync(cacheDir, { recursive: true });
    }
  } catch (error) {
    console.error(`Error creating cache directory: ${error}`);
  }

  return cacheDir;
}
