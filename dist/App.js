"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_query_devtools_1 = require("@tanstack/react-query-devtools");
var react_query_1 = require("@tanstack/react-query");
var globalStyles_1 = __importDefault(require("providers/Theme/globalStyles"));
var Theme_1 = require("./providers/Theme");
var Router_1 = __importDefault(require("./routes/Router"));
var App = function () {
    var queryClient = new react_query_1.QueryClient();
    return (react_1.default.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        react_1.default.createElement(Theme_1.ThemeProvider, null,
            react_1.default.createElement(react_query_devtools_1.ReactQueryDevtools, null),
            react_1.default.createElement(Router_1.default, null),
            react_1.default.createElement(globalStyles_1.default, null))));
};
exports.default = App;
