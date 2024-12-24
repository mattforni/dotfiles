"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortUtil = void 0;
class SortUtil {
    constructor(settings, custom = 0) {
        this.custom = 0;
        this.settings = settings;
        this.custom = custom;
    }
    customSort(a, b) {
        const sortOrderReverse = this.settings.sortOrderReverse;
        const sortOrder = this.settings.getCustomSortKeywords(this.custom);
        const indexA = sortOrder.indexOf(a);
        const indexB = sortOrder.indexOf(b);
        if (indexA > -1 && indexB > -1) {
            return SortUtil.compare(indexA, indexB);
        }
        if (indexA !== -1 && indexB === -1) {
            return -1;
        }
        if (indexA === -1 && indexB !== -1) {
            return 1;
        }
        if (sortOrderReverse) {
            return this.localeSort(b, a);
        }
        return this.localeSort(a, b);
    }
    static compare(a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }
    localeSort(a, b) {
        return a.localeCompare(b, this.settings.locale);
    }
}
exports.SortUtil = SortUtil;
//# sourceMappingURL=sort-util.js.map