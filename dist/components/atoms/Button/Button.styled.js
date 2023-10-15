"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var styled_components_1 = __importStar(require("styled-components"));
exports.Button = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 50px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n\n  &:hover {\n    background: ", ";\n    border: 1px solid ", ";\n  }\n\n  &:active {\n    background: ", ";\n    border: 1px solid ", ";\n  }\n\n  position: relative;\n  cursor: pointer;\n\n  ", "\n"], ["\n  width: 100%;\n  height: 50px;\n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  text-transform: uppercase;\n\n  &:hover {\n    background: ", ";\n    border: 1px solid ", ";\n  }\n\n  &:active {\n    background: ", ";\n    border: 1px solid ", ";\n  }\n\n  position: relative;\n  cursor: pointer;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.softBlack;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.violetDream;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.violetDream;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize.bigBoy;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.blueWave;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.blueWave;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.blueWave;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.blueWave;
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      & {\n        cursor: not-allowed;\n        opacity: 0.5;\n\n        background: ", ";\n      }\n    "], ["\n      & {\n        cursor: not-allowed;\n        opacity: 0.5;\n\n        background: ", ";\n      }\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.violetDream;
    });
});
var templateObject_1, templateObject_2;
