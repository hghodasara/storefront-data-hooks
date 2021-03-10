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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConfig = exports.getConfig = exports.Config = void 0;
var fetch_graphql_api_1 = __importDefault(require("./utils/fetch-graphql-api"));
var fetch_store_api_1 = __importDefault(require("./utils/fetch-store-api"));
var API_URL = process.env.BIGCOMMERCE_STOREFRONT_API_URL;
var API_TOKEN = process.env.BIGCOMMERCE_STOREFRONT_API_TOKEN;
var STORE_API_URL = process.env.BIGCOMMERCE_STORE_API_URL;
var STORE_API_TOKEN = process.env.BIGCOMMERCE_STORE_API_TOKEN;
var STORE_API_CLIENT_ID = process.env.BIGCOMMERCE_STORE_API_CLIENT_ID;
var STORE_CHANNEL_ID = process.env.BIGCOMMERCE_CHANNEL_ID;
if (!API_URL) {
    throw new Error("The environment variable BIGCOMMERCE_STOREFRONT_API_URL is missing and it's required to access your store");
}
if (!API_TOKEN) {
    throw new Error("The environment variable BIGCOMMERCE_STOREFRONT_API_TOKEN is missing and it's required to access your store");
}
if (!(STORE_API_URL && STORE_API_TOKEN && STORE_API_CLIENT_ID)) {
    throw new Error("The environment variables BIGCOMMERCE_STORE_API_URL, BIGCOMMERCE_STORE_API_TOKEN, BIGCOMMERCE_STORE_API_CLIENT_ID have to be set in order to access the REST API of your store");
}
var Config = /** @class */ (function () {
    function Config(config) {
        this.config = __assign(__assign({}, config), { 
            // The customerCookie is not customizable for now, BC sets the cookie and it's
            // not important to rename it
            customerCookie: 'SHOP_TOKEN' });
    }
    Config.prototype.getConfig = function (userConfig) {
        if (userConfig === void 0) { userConfig = {}; }
        return Object.entries(userConfig).reduce(function (cfg, _a) {
            var _b;
            var key = _a[0], value = _a[1];
            return Object.assign(cfg, (_b = {}, _b[key] = value, _b));
        }, __assign({}, this.config));
    };
    Config.prototype.setConfig = function (newConfig) {
        Object.assign(this.config, newConfig);
    };
    return Config;
}());
exports.Config = Config;
var ONE_DAY = 60 * 60 * 24;
var config = new Config({
    commerceUrl: API_URL,
    apiToken: API_TOKEN,
    cartCookie: (_a = process.env.BIGCOMMERCE_CART_COOKIE) !== null && _a !== void 0 ? _a : 'bc_cartId',
    cartCookieMaxAge: ONE_DAY * 30,
    fetch: fetch_graphql_api_1.default,
    applyLocale: true,
    // REST API only
    storeApiUrl: STORE_API_URL,
    storeApiToken: STORE_API_TOKEN,
    storeApiClientId: STORE_API_CLIENT_ID,
    storeChannelId: STORE_CHANNEL_ID,
    storeApiFetch: fetch_store_api_1.default,
});
function getConfig(userConfig) {
    return config.getConfig(userConfig);
}
exports.getConfig = getConfig;
function setConfig(newConfig) {
    return config.setConfig(newConfig);
}
exports.setConfig = setConfig;
