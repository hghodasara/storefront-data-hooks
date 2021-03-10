"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("..");
function useAction(options, fetcher) {
    var fetcherRef = __1.useCommerce().fetcherRef;
    return react_1.useCallback(function (input) { return fetcher(options, input, fetcherRef.current); }, [fetcher]);
}
exports.default = useAction;
