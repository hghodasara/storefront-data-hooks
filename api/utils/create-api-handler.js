"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
function createApiHandler(handler, handlers, defaultOptions) {
    return function getApiHandler(_a) {
        var _b = _a === void 0 ? {} : _a, config = _b.config, operations = _b.operations, options = _b.options;
        var ops = __assign(__assign({}, operations), handlers);
        var opts = __assign(__assign({}, defaultOptions), options);
        return function apiHandler(req, res) {
            return handler(req, res, __1.getConfig(config), ops, opts);
        };
    };
}
exports.default = createApiHandler;
