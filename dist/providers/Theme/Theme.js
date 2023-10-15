"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var variables_1 = require("./variables");
var ThemeProvider = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: variables_1.theme }, children));
};
exports.ThemeProvider = ThemeProvider;
