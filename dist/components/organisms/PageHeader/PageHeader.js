"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHeader = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("components/atoms/Button");
var useSignOut_1 = require("auth/useSignOut");
var Styles = __importStar(require("./PageHeader.styled"));
var PageHeader = function (_a) {
    var title = _a.title;
    var signOut = (0, useSignOut_1.useSignOut)();
    var handleClickSignOut = function () {
        try {
            signOut();
        }
        catch (_a) {
            //
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Styles.HeaderWrapper, null,
            react_1.default.createElement(Styles.Title, null, title),
            react_1.default.createElement(Styles.Action, null,
                react_1.default.createElement(Button_1.Button, { onClick: handleClickSignOut, type: "button" }, "Sign out")))));
};
exports.PageHeader = PageHeader;
