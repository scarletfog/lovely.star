"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DashboardLayout_1 = require("components/layouts/DashboardLayout");
var ServersList_1 = require("components/organisms/ServersList");
var DashboardPage = function () {
    return (react_1.default.createElement(DashboardLayout_1.DashboardLayout, { title: "Main dashboard" },
        react_1.default.createElement("div", null,
            react_1.default.createElement(ServersList_1.ServersList, null))));
};
exports.default = DashboardPage;
