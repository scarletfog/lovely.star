"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useServers = void 0;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var queryKeys_1 = require("../constants/queryKeys");
var api_1 = require("../api/api");
var sort_1 = require("lib/sort");
var useServers = function () {
    var _a = (0, react_query_1.useQuery)([queryKeys_1.QUERY_KEY.servers], api_1.getList, {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    }), data = _a.data, error = _a.error, isLoading = _a.isLoading;
    var sortedServers = (0, react_1.useMemo)(function () { return (0, sort_1.sortByParams)((data === null || data === void 0 ? void 0 : data.data) || [], ["name", "distance"]); }, [data === null || data === void 0 ? void 0 : data.data]);
    return {
        data: sortedServers,
        isLoading: isLoading,
        error: error,
    };
};
exports.useServers = useServers;
