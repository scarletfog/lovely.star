"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtectedRoute = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var useUser_1 = require("../auth/useUser");
var ProtectedRoute = function (_a) {
    var _b = _a.redirectPath, redirectPath = _b === void 0 ? "/" : _b, children = _a.children;
    var user = (0, useUser_1.useUser)().user;
    if (!user) {
        return react_1.default.createElement(react_router_dom_1.Navigate, { to: redirectPath, replace: true });
    }
    return children;
};
exports.ProtectedRoute = ProtectedRoute;
