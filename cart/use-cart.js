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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendHook = exports.fetcher = void 0;
var use_cart_1 = __importDefault(require(".././commerce/cart/use-cart"));
var var_1 = require("./var");
var defaultOpts = {
    url: var_1.defaultUrl.url,
    method: 'GET',
};
exports.fetcher = function (options, _a, fetch) {
    var cartId = _a.cartId;
    return cartId ? fetch(__assign(__assign({}, defaultOpts), options)) : null;
};
function extendHook(customFetcher, swrOptions) {
    var useCart = function (params) {
        var options = (params === null || params === void 0 ? void 0 : params.options) || defaultOpts;
        var response = use_cart_1.default(options, [], customFetcher, __assign({ revalidateOnFocus: false }, swrOptions));
        // Uses a getter to only calculate the prop when required
        // response.data is also a getter and it's better to not trigger it early
        Object.defineProperty(response, 'isEmpty', {
            get: function () {
                var _a, _b;
                return Object.values((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.line_items) !== null && _b !== void 0 ? _b : {}).every(function (items) { return !items.length; });
            },
            set: function (x) { return x; },
        });
        return response;
    };
    useCart.extend = extendHook;
    return useCart;
}
exports.extendHook = extendHook;
exports.default = extendHook(exports.fetcher);
