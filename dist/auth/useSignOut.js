"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSignOut = void 0;
var react_query_1 = require("@tanstack/react-query");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var queryKeys_1 = require("../constants/queryKeys");
var urls_1 = require("../constants/urls");
var localStorage_1 = require("auth/localStorage");
var useSignOut = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var onSignOut = (0, react_1.useCallback)(function () {
        queryClient.setQueryData([queryKeys_1.QUERY_KEY.user], null);
        (0, localStorage_1.removeUser)();
        navigate(urls_1.LOGIN_URL);
    }, [navigate, queryClient]);
    return onSignOut;
};
exports.useSignOut = useSignOut;
