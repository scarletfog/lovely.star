"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.getToken = exports.getUser = exports.saveUser = void 0;
var USER_LOCAL_STORAGE_KEY = "LOVELY_STAR_APP_USER";
var saveUser = function (user) {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
};
exports.saveUser = saveUser;
var getUser = function () {
    var user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
    return user ? JSON.parse(user) : undefined;
};
exports.getUser = getUser;
var getToken = function () {
    try {
        var v = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || "";
        var user = JSON.parse(v);
        return user === null || user === void 0 ? void 0 : user.token;
    }
    catch (_a) {
        return undefined;
    }
};
exports.getToken = getToken;
var removeUser = function () {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
};
exports.removeUser = removeUser;
