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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommerce = exports.CommerceProvider = exports.bigcommerceConfig = void 0;
var React = __importStar(require("react"));
var commerce_1 = require("./commerce");
var errors_1 = require("./commerce/utils/errors");
function getText(res) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, res.text()];
                case 1: return [2 /*return*/, (_a.sent()) || res.statusText];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, res.statusText];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getError(res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var data, _b;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!((_a = res.headers.get('Content-Type')) === null || _a === void 0 ? void 0 : _a.includes('application/json'))) return [3 /*break*/, 2];
                    return [4 /*yield*/, res.json()];
                case 1:
                    data = _d.sent();
                    return [2 /*return*/, new errors_1.FetcherError({ errors: data.errors, status: res.status })];
                case 2:
                    _b = errors_1.FetcherError.bind;
                    _c = {};
                    return [4 /*yield*/, getText(res)];
                case 3: return [2 /*return*/, new (_b.apply(errors_1.FetcherError, [void 0, (_c.message = _d.sent(), _c.status = res.status, _c)]))()];
            }
        });
    });
}
exports.bigcommerceConfig = {
    locale: 'en-us',
    cartCookie: 'bc_cartId',
    fetcher: function (_a) {
        var url = _a.url, _b = _a.method, method = _b === void 0 ? 'GET' : _b, variables = _a.variables, bodyObj = _a.body;
        return __awaiter(this, void 0, void 0, function () {
            var hasBody, body, headers, res, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        hasBody = Boolean(variables || bodyObj);
                        body = hasBody
                            ? JSON.stringify(variables ? { variables: variables } : bodyObj)
                            : undefined;
                        headers = hasBody ? { 'Content-Type': 'application/json' } : undefined;
                        return [4 /*yield*/, fetch(url, {
                                method: method,
                                body: body,
                                headers: headers,
                                credentials: 'include',
                                mode: 'no-cors',
                            })];
                    case 1:
                        res = _c.sent();
                        if (!res.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = (_c.sent()).data;
                        return [2 /*return*/, data];
                    case 3: return [4 /*yield*/, getError(res)];
                    case 4: throw _c.sent();
                }
            });
        });
    },
};
function CommerceProvider(_a) {
    var children = _a.children, config = __rest(_a, ["children"]);
    return (React.createElement(commerce_1.CommerceProvider, { config: __assign(__assign({}, exports.bigcommerceConfig), config) }, children));
}
exports.CommerceProvider = CommerceProvider;
exports.useCommerce = function () { return commerce_1.useCommerce(); };
