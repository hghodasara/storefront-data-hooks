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
var __1 = require("..");
var errors_1 = require("./errors");
var fetch_1 = __importDefault(require("./fetch"));
function fetchStoreApi(endpoint, options) {
    return __awaiter(this, void 0, void 0, function () {
        var config, res, error_1, contentType, isJSON, data, _a, headers, msg, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    config = __1.getConfig();
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch_1.default(config.storeApiUrl + endpoint, __assign(__assign({}, options), { headers: __assign(__assign({}, options === null || options === void 0 ? void 0 : options.headers), { 'Content-Type': 'application/json', 'X-Auth-Token': config.storeApiToken, 'X-Auth-Client': config.storeApiClientId }) }))];
                case 2:
                    res = _c.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _c.sent();
                    throw new errors_1.BigcommerceNetworkError("Fetch to Bigcommerce failed: " + error_1.message);
                case 4:
                    contentType = res.headers.get('Content-Type');
                    isJSON = contentType === null || contentType === void 0 ? void 0 : contentType.includes('application/json');
                    if (!!res.ok) return [3 /*break*/, 9];
                    if (!isJSON) return [3 /*break*/, 6];
                    return [4 /*yield*/, res.json()];
                case 5:
                    _a = _c.sent();
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, getTextOrNull(res)];
                case 7:
                    _a = _c.sent();
                    _c.label = 8;
                case 8:
                    data = _a;
                    headers = getRawHeaders(res);
                    msg = "Big Commerce API error (" + res.status + ") \nHeaders: " + JSON.stringify(headers, null, 2) + "\n" + (typeof data === 'string' ? data : JSON.stringify(data, null, 2));
                    throw new errors_1.BigcommerceApiError(msg, res, data);
                case 9:
                    if (res.status !== 204 && !isJSON) {
                        throw new errors_1.BigcommerceApiError("Fetch to Bigcommerce API failed, expected JSON content but found: " + contentType, res);
                    }
                    if (!(res.status === 204)) return [3 /*break*/, 10];
                    _b = null;
                    return [3 /*break*/, 12];
                case 10: return [4 /*yield*/, res.json()];
                case 11:
                    _b = _c.sent();
                    _c.label = 12;
                case 12: 
                // If something was removed, the response will be empty
                return [2 /*return*/, _b];
            }
        });
    });
}
exports.default = fetchStoreApi;
function getRawHeaders(res) {
    var headers = {};
    res.headers.forEach(function (value, key) {
        headers[key] = value;
    });
    return headers;
}
function getTextOrNull(res) {
    try {
        return res.text();
    }
    catch (err) {
        return null;
    }
}
