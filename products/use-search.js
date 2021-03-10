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
var use_search_1 = __importDefault(require(".././commerce/products/use-search"));
var defaultOpts = {
    url: '/api/bigcommerce/catalog/products',
    method: 'GET',
};
exports.fetcher = function (options, _a, fetch) {
    var _b, _c;
    var search = _a.search, categoryId = _a.categoryId, stringifiedCategoryIds = _a.stringifiedCategoryIds, brandId = _a.brandId, sort = _a.sort;
    // Use a dummy base as we only care about the relative path
    var url = new URL((_b = options === null || options === void 0 ? void 0 : options.url) !== null && _b !== void 0 ? _b : defaultOpts.url, 'http://a');
    if (search)
        url.searchParams.set('search', search);
    if (Number.isInteger(categoryId))
        url.searchParams.set('category', String(categoryId));
    var categoryIds = JSON.parse(stringifiedCategoryIds || '[]');
    if (categoryIds &&
        categoryIds.length > 0 &&
        categoryIds.every(function (categoryId) { return Number.isInteger(Number(categoryId)); }))
        url.searchParams.set('categories', categoryIds.join(','));
    if (Number.isInteger(brandId))
        url.searchParams.set('brand', String(brandId));
    if (sort)
        url.searchParams.set('sort', sort);
    return fetch({
        url: url.pathname + url.search,
        method: (_c = options === null || options === void 0 ? void 0 : options.method) !== null && _c !== void 0 ? _c : defaultOpts.method,
    });
};
function extendHook(customFetcher, swrOptions) {
    var useSearch = function (input) {
        if (input === void 0) { input = {}; }
        if (input.categoryId) {
            console.warn("categoryId (number) will be deprecated in favor of categoryIds (number[]) in the next major release.");
        }
        // SWR doesn't support nested arrays as key, so it's necessary to stringify it
        var response = use_search_1.default(defaultOpts, [
            ['search', input.search],
            ['categoryId', input.categoryId],
            ['stringifiedCategoryIds', JSON.stringify(input.categoryIds)],
            ['brandId', input.brandId],
            ['sort', input.sort],
        ], customFetcher, __assign({ revalidateOnFocus: false }, swrOptions));
        return response;
    };
    useSearch.extend = extendHook;
    return useSearch;
}
exports.extendHook = extendHook;
exports.default = extendHook(exports.fetcher);
