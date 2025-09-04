import { workspace } from "vscode";
import { findVersionAndLocation, readLocalCssFile } from './helpers/version';

import * as cache from './helpers/cache';

class Bootstrap {
  public version: string = 'latest';
  public majorVersion: string = '5';
  public locationType: string = 'remote';
  public classList: Array<string> = [];

  constructor() {
    let [version, locationType] = findVersionAndLocation('bootstrap', this.rootPath());

    this.version = version;
    this.majorVersion = this.version.split('.')[0];
    this.locationType = locationType;
  }

  public load() {
    const cached = cache.cacheExists('bootstrap', this.version);

    if (cached) {
      this.classList = JSON.parse(cache.readCache('bootstrap', this.version));
    } else {
      this.locationType === 'remote' ? this.loadRemote() : this.loadLocal();
    }

    this.writeCache();
  }

  private async loadRemote() {
    const response = await fetch(this.remoteUrl());
    const content = await response.text();

    this.classList = this.extractClasses(content);
  }

  private loadLocal() {
    const content = readLocalCssFile(this.rootPath());
    this.classList = this.extractClasses(content);
  }

  private rootPath(): string {
    return workspace.workspaceFolders ? workspace.workspaceFolders[0].uri.fsPath : '';
  }

  private remoteUrl(): string {
    return `https://cdn.jsdelivr.net/npm/bootstrap@${this.version}/dist/css/bootstrap.min.css`;
  }

  private writeCache() {
    cache.writeCache('bootstrap', this.version, this.classList);
  }

  private extractClasses(content: string): Array<string> {
    const regex = /\}\.([\w-]+)/g;
    const classes: Set<string> = new Set();
    const matches = content.match(regex);

    if (matches) {
      matches.forEach(match => {
        classes.add(match.slice(2));
      });
    }

    return Array.from(classes);
  }
}

export default Bootstrap;
