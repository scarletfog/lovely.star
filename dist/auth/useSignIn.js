"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSignIn = void 0;
var react_query_1 = require("@tanstack/react-query");
var react_router_dom_1 = require("react-router-dom");
var queryKeys_1 = require("../constants/queryKeys");
var urls_1 = require("../constants/urls");
var localStorage_1 = require("../auth/localStorage");
var api_1 = require("../api/api");
var useSignIn = function () {
    var queryClient = (0, react_query_1.useQueryClient)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var signInMutation = (0, react_query_1.useMutation)(function (_a) {
        var username = _a.username, password = _a.password;
        return (0, api_1.loginUser)(username, password);
    }, {
        onSuccess: function (data, variables) {
            queryClient.setQueryData([queryKeys_1.QUERY_KEY.user], data);
            var saveData = data;
            saveData.username = variables.username;
            (0, localStorage_1.saveUser)(saveData);
            navigate(urls_1.DASHBOARD_URL);
        },
    }).mutateAsync;
    return signInMutation;
};
exports.useSignIn = useSignIn;
