"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByParams = void 0;
var sortByParams = function (items, dateFieldName) {
    return items.sort(function (a, b) {
        return dateFieldName.reduce(function (currentValue, elem) {
            if (currentValue === 0) {
                // not sorted yet
                var firstElem = a[elem];
                var secondElem = b[elem];
                if (typeof firstElem === "string" && typeof secondElem === "string") {
                    return firstElem.localeCompare(secondElem);
                }
                if (typeof firstElem === "number" && typeof secondElem === "number") {
                    return firstElem - secondElem;
                }
            }
            return currentValue;
        }, 0);
    });
};
exports.sortByParams = sortByParams;
