"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderWrapper = exports.Action = exports.Title = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Title = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n"], ["\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.darkerWave;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontWeight.semiBold;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize.bigBoy;
});
exports.Action = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 200px;\n"], ["\n  width: 200px;\n"])));
exports.HeaderWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: ", ";\n  justify-content: space-between;\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  padding: ", ";\n  justify-content: space-between;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing.lg;
});
var templateObject_1, templateObject_2, templateObject_3;
