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
var errors_1 = require("../.././commerce/utils/errors");
var __1 = require("..");
var fetch_1 = __importDefault(require("./fetch"));
var fetchGraphqlApi = function (query, _a, fetchOptions) {
    var _b = _a === void 0 ? {} : _a, variables = _b.variables, preview = _b.preview;
    return __awaiter(void 0, void 0, void 0, function () {
        var config, res, json;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    config = __1.getConfig();
                    return [4 /*yield*/, fetch_1.default(config.commerceUrl + (preview ? '/preview' : ''), __assign(__assign({}, fetchOptions), { method: 'POST', headers: __assign(__assign({ Authorization: "Bearer " + config.apiToken }, fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.headers), { 'Content-Type': 'application/json' }), body: JSON.stringify({
                                query: query,
                                variables: variables,
                            }) }))];
                case 1:
                    res = _d.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    json = _d.sent();
                    if (json.errors) {
                        throw new errors_1.FetcherError({
                            errors: (_c = json.errors) !== null && _c !== void 0 ? _c : [{ message: 'Failed to fetch Bigcommerce API' }],
                            status: res.status,
                        });
                    }
                    return [2 /*return*/, { data: json.data, res: res }];
            }
        });
    });
};
exports.default = fetchGraphqlApi;
