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
exports.InputWrapper = exports.Input = void 0;
var styled_components_1 = __importStar(require("styled-components"));
exports.Input = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0 10px;\n  color: ", ";\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: none;\n  border-radius: inherit;\n  background: none;\n  outline: none;\n\n  &::placeholder {\n    color: ", ";\n    font-weight: ", ";\n    opacity: 1;\n  }\n\n  &:-ms-input-placeholder {\n    color: ", ";\n    font-weight: ", ";\n    opacity: 1;\n  }\n\n  &::-ms-input-placeholder {\n    color: ", ";\n    font-weight: ", ";\n    opacity: 1;\n  }\n"], ["\n  padding: 0 10px;\n  color: ", ";\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: none;\n  border-radius: inherit;\n  background: none;\n  outline: none;\n\n  &::placeholder {\n    color: ", ";\n    font-weight: ", ";\n    opacity: 1;\n  }\n\n  &:-ms-input-placeholder {\n    color: ", ";\n    font-weight: ", ";\n    opacity: 1;\n  }\n\n  &::-ms-input-placeholder {\n    color: ", ";\n    font-weight: ", ";\n    opacity: 1;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.darkerWave;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.violetDream;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontWeight.semiBold;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.melon;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontWeight.semiBold;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.melon;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontWeight.semiBold;
});
exports.InputWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  border: 2px solid ", ";\n  background: ", ";\n  filter: drop-shadow(0px 0px 5px #c9b1ff);\n  border-radius: ", ";\n  width: 100%;\n  height: 40px;\n\n  &:focus-within {\n    border: ", ";\n  }\n\n  ", ";\n"], ["\n  position: relative;\n  border: 2px solid ", ";\n  background: ", ";\n  filter: drop-shadow(0px 0px 5px #c9b1ff);\n  border-radius: ", ";\n  width: 100%;\n  height: 40px;\n\n  &:focus-within {\n    border: ", ";\n  }\n\n  ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.fluff;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.snowBall;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius.lg;
}, function (_a) {
    var theme = _a.theme;
    return "2px solid ".concat(theme.colors.darkerWave);
}, function (_a) {
    var theme = _a.theme, $hasError = _a.$hasError, $hasSuccess = _a.$hasSuccess;
    if ($hasError) {
        return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        border: 1px solid ", " !important;\n      "], ["\n        border: 1px solid ", " !important;\n      "])), theme.colors.incident);
    }
    if ($hasSuccess) {
        return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        border: 1px solid ", " !important;\n      "], ["\n        border: 1px solid ", " !important;\n      "])), theme.colors.teaGreen);
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
