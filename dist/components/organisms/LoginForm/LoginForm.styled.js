"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnicornWrapper = exports.Unicorn = exports.Heading = exports.InputsWrapper = exports.ContentWrapper = exports.FormWrapper = exports.FormRow = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.FormRow = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin: ", ";\n  flex-direction: column;\n"], ["\n  display: flex;\n  margin: ", ";\n  flex-direction: column;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.spacing.s;
});
exports.FormWrapper = styled_components_1.default.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"])));
exports.ContentWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: rgba(253, 252, 249, 0.7);\n  background-image: url(\"/assets/background.jpg\");\n  filter: drop-shadow(0px 0px 10px #4444dd);\n  background-size: cover;\n  display: flex;\n  padding: 20px;\n  border-radius: ", ";\n  min-width: 20vw;\n  height: 60vh;\n  @media (max-width: 768px) {\n    height: 70vh;\n    min-width: 25vw;\n  }\n  display: flex;\n  padding: 30px;\n  flex-direction: column;\n"], ["\n  background: rgba(253, 252, 249, 0.7);\n  background-image: url(\"/assets/background.jpg\");\n  filter: drop-shadow(0px 0px 10px #4444dd);\n  background-size: cover;\n  display: flex;\n  padding: 20px;\n  border-radius: ", ";\n  min-width: 20vw;\n  height: 60vh;\n  @media (max-width: 768px) {\n    height: 70vh;\n    min-width: 25vw;\n  }\n  display: flex;\n  padding: 30px;\n  flex-direction: column;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.borderRadius.lg;
});
exports.InputsWrapper = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  display: flex;\n  border-radius: ", ";\n  width: 100%;\n  height: 60%;\n  gap: 5px;\n  flex-direction: column;\n  margin-top: auto;\n  div:last-of-type {\n    margin-top: auto;\n  }\n"], ["\n  background-color: ", ";\n  display: flex;\n  border-radius: ", ";\n  width: 100%;\n  height: 60%;\n  gap: 5px;\n  flex-direction: column;\n  margin-top: auto;\n  div:last-of-type {\n    margin-top: auto;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.snowBall;
}, function (_a) {
    var theme = _a.theme;
    return theme.borderRadius.lg;
});
exports.Heading = styled_components_1.default.h2(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: Verdana;\n  color: ", ";\n  font-size: 2rem;\n"], ["\n  font-family: Verdana;\n  color: ", ";\n  font-size: 2rem;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.darkerWave;
});
exports.Unicorn = styled_components_1.default.img(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100px;\n  @media (max-width: 768px) {\n    display: none;\n  }\n"], ["\n  width: 100px;\n  @media (max-width: 768px) {\n    display: none;\n  }\n"])));
exports.UnicornWrapper = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
