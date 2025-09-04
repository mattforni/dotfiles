"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUtil = void 0;
const fs_1 = require("fs");
const glob_1 = require("glob");
const yaml_util_1 = require("./yaml-util");
const settings_1 = require("../settings");
class FileUtil {
    constructor(settings = new settings_1.Settings()) {
        this.encoding = "utf-8";
        this.globOptions = { dot: true };
        this.settings = settings;
    }
    getFiles(path) {
        let files = [];
        for (const extension of this.settings.getExtensions()) {
            files = files.concat((0, glob_1.sync)(`${path}/**/*.${extension}`, this.globOptions));
        }
        return files;
    }
    readFile(file) {
        return (0, fs_1.readFileSync)(file, this.encoding).toString();
    }
    sortFile(file) {
        const yamlutil = new yaml_util_1.YamlUtil();
        const text = (0, fs_1.readFileSync)(file, this.encoding).toString();
        let sortedYaml = yamlutil.sortYaml(text, 0);
        if (sortedYaml) {
            sortedYaml = yamlutil.setLeadingDashes(sortedYaml);
            (0, fs_1.writeFileSync)(file, sortedYaml);
        }
        else {
            throw new Error(`File ${file} could not be sorted`);
        }
    }
}
exports.FileUtil = FileUtil;
//# sourceMappingURL=file-util.js.map