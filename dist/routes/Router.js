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
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var urls_1 = require("../constants/urls");
var ProtectedRoute_1 = require("./ProtectedRoute");
var Dashbaord = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require("../components/pages/Dashboard/DashboardPage")); }); });
var LoginPage = react_1.default.lazy(function () { return Promise.resolve().then(function () { return __importStar(require("../components/pages/LoginPage/LoginPage")); }); });
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: urls_1.LOGIN_URL,
        element: (react_1.default.createElement(react_1.default.Suspense, { fallback: "Loading..." },
            react_1.default.createElement(LoginPage, null))),
    },
    {
        path: urls_1.DASHBOARD_URL,
        element: (react_1.default.createElement(ProtectedRoute_1.ProtectedRoute, { redirectPath: urls_1.LOGIN_URL },
            react_1.default.createElement(react_1.default.Suspense, { fallback: "Loading..." },
                react_1.default.createElement(Dashbaord, null)))),
    },
]);
function default_1() {
    return react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router });
}
exports.default = default_1;
