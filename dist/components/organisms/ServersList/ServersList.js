"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServersList = void 0;
var react_1 = __importDefault(require("react"));
var useServers_1 = require("auth/useServers");
var ServersList = function () {
    var _a = (0, useServers_1.useServers)(), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        isLoading && react_1.default.createElement("div", null, "Loading"),
        !isLoading && error && react_1.default.createElement("div", null, "Unable to fetch data"),
        !isLoading && !error && (react_1.default.createElement("div", null, data.map(function (serverItem, idx) { return (react_1.default.createElement("div", { key: "".concat(idx, "-").concat(serverItem.name) },
            react_1.default.createElement("p", null,
                serverItem.name,
                " - ",
                serverItem.distance))); })))));
};
exports.ServersList = ServersList;
