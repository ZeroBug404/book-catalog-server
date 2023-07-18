"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick = (obj, keys) => {
    const finalObj = {};
    // ['page', 'limit', 'sortBy', 'sortOrder']
    for (const key of keys) {
        if (obj && obj.hasOwnProperty.call(obj, key)) {
            finalObj[key] = obj[key];
        }
    }
    return finalObj;
};
exports.default = pick;
