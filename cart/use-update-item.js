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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetcher = void 0;
var react_1 = require("react");
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var errors_1 = require(".././commerce/utils/errors");
var use_update_item_1 = __importDefault(require(".././commerce/cart/use-update-item"));
var use_remove_item_1 = require("./use-remove-item");
var use_cart_1 = __importDefault(require("./use-cart"));
var defaultOpts = {
    url: 'https://api.goredemo.com/commerce/cart',
    method: 'PUT',
};
exports.fetcher = function (options, _a, fetch) {
    var itemId = _a.itemId, item = _a.item;
    if (Number.isInteger(item.quantity)) {
        // Also allow the update hook to remove an item if the quantity is lower than 1
        if (item.quantity < 1) {
            return use_remove_item_1.fetcher(null, { itemId: itemId }, fetch);
        }
    }
    else if (item.quantity) {
        throw new errors_1.CommerceError({
            message: 'The item quantity has to be a valid integer',
        });
    }
    return fetch(__assign(__assign(__assign({}, defaultOpts), options), { body: { itemId: itemId, item: item } }));
};
function extendHook(customFetcher, cfg) {
    var _this = this;
    var useUpdateItem = function (item, params) {
        var _a;
        var options = (params === null || params === void 0 ? void 0 : params.options) || defaultOpts;
        var mutate = use_cart_1.default().mutate;
        var fn = use_update_item_1.default(options, customFetcher);
        return react_1.useCallback(lodash_debounce_1.default(function (input) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, fn({
                            itemId: (_a = input.id) !== null && _a !== void 0 ? _a : item === null || item === void 0 ? void 0 : item.id,
                            item: {
                                productId: (_b = input.productId) !== null && _b !== void 0 ? _b : item === null || item === void 0 ? void 0 : item.product_id,
                                variantId: (_c = input.variantId) !== null && _c !== void 0 ? _c : item === null || item === void 0 ? void 0 : item.variant_id,
                                quantity: input.quantity,
                            },
                        })];
                    case 1:
                        data = _d.sent();
                        return [4 /*yield*/, mutate(data, false)];
                    case 2:
                        _d.sent();
                        return [2 /*return*/, data];
                }
            });
        }); }, (_a = cfg === null || cfg === void 0 ? void 0 : cfg.wait) !== null && _a !== void 0 ? _a : 500), [fn, mutate]);
    };
    useUpdateItem.extend = extendHook;
    return useUpdateItem;
}
exports.default = extendHook(exports.fetcher);
