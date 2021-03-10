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
exports.handlers = void 0;
var is_allowed_method_1 = __importDefault(require("../utils/is-allowed-method"));
var create_api_handler_1 = __importDefault(require("../utils/create-api-handler"));
var errors_1 = require("../utils/errors");
var get_wishlist_1 = __importDefault(require("./handlers/get-wishlist"));
var add_item_1 = __importDefault(require("./handlers/add-item"));
var remove_item_1 = __importDefault(require("./handlers/remove-item"));
var METHODS = ['GET', 'POST', 'DELETE'];
// TODO: a complete implementation should have schema validation for `req.body`
var wishlistApi = function (req, res, config, handlers) { return __awaiter(void 0, void 0, void 0, function () {
    var cookies, customerToken, body, body, body, error_1, message;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!is_allowed_method_1.default(req, res, METHODS))
                    return [2 /*return*/];
                cookies = req.cookies;
                customerToken = cookies[config.customerCookie];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                if (!(req.method === 'GET')) return [3 /*break*/, 3];
                body = {
                    customerToken: customerToken,
                    includeProducts: req.query.products === '1',
                };
                return [4 /*yield*/, handlers['getWishlist']({ req: req, res: res, config: config, body: body })];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                if (!(req.method === 'POST')) return [3 /*break*/, 5];
                body = __assign(__assign({}, req.body), { customerToken: customerToken });
                return [4 /*yield*/, handlers['addItem']({ req: req, res: res, config: config, body: body })];
            case 4: return [2 /*return*/, _a.sent()];
            case 5:
                if (!(req.method === 'DELETE')) return [3 /*break*/, 7];
                body = __assign(__assign({}, req.body), { customerToken: customerToken });
                return [4 /*yield*/, handlers['removeItem']({ req: req, res: res, config: config, body: body })];
            case 6: return [2 /*return*/, _a.sent()];
            case 7: return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                console.error(error_1);
                message = error_1 instanceof errors_1.BigcommerceApiError
                    ? 'An unexpected error ocurred with the Bigcommerce API'
                    : 'An unexpected error ocurred';
                res.status(500).json({ data: null, errors: [{ message: message }] });
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.handlers = {
    getWishlist: get_wishlist_1.default,
    addItem: add_item_1.default,
    removeItem: remove_item_1.default,
};
exports.default = create_api_handler_1.default(wishlistApi, exports.handlers, {});
