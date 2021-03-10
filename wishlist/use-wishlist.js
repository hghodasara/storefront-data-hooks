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
var use_wishlist_1 = __importDefault(require(".././commerce/wishlist/use-wishlist"));
var use_customer_1 = __importDefault(require("../use-customer"));
var defaultOpts = {
    url: '/api/bigcommerce/wishlist',
    method: 'GET',
};
exports.fetcher = function (options, _a, fetch) {
    var _b, _c;
    var customerId = _a.customerId, includeProducts = _a.includeProducts;
    if (!customerId)
        return null;
    // Use a dummy base as we only care about the relative path
    var url = new URL((_b = options === null || options === void 0 ? void 0 : options.url) !== null && _b !== void 0 ? _b : defaultOpts.url, 'http://a');
    if (includeProducts)
        url.searchParams.set('products', '1');
    return fetch({
        url: url.pathname + url.search,
        method: (_c = options === null || options === void 0 ? void 0 : options.method) !== null && _c !== void 0 ? _c : defaultOpts.method,
    });
};
function extendHook(customFetcher, swrOptions) {
    var useWishlist = function (_a) {
        var includeProducts = (_a === void 0 ? {} : _a).includeProducts;
        var customer = use_customer_1.default().data;
        var response = use_wishlist_1.default(defaultOpts, [
            ['customerId', customer === null || customer === void 0 ? void 0 : customer.entityId],
            ['includeProducts', includeProducts],
        ], customFetcher, __assign({ revalidateOnFocus: false }, swrOptions));
        // Uses a getter to only calculate the prop when required
        // response.data is also a getter and it's better to not trigger it early
        Object.defineProperty(response, 'isEmpty', {
            get: function () {
                var _a, _b;
                return (((_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) || 0) <= 0;
            },
            set: function (x) { return x; },
        });
        return response;
    };
    useWishlist.extend = extendHook;
    return useWishlist;
}
exports.extendHook = extendHook;
exports.default = extendHook(exports.fetcher);
