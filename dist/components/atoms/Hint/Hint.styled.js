"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HintStyled = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.HintStyled = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  margin: 6px 0 2px;\n  color: ", ";\n  font-size: ", ";\n"], ["\n  display: block;\n  margin: 6px 0 2px;\n  color: ", ";\n  font-size: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.incident;
}, function (_a) {
    var theme = _a.theme;
    return theme.fontSize.body;
});
var templateObject_1;
