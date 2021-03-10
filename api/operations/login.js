"use strict";
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
exports.loginMutation = void 0;
var concat_cookie_1 = __importDefault(require("../utils/concat-cookie"));
var __1 = require("..");
exports.loginMutation = "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      result\n    }\n  }\n";
function login(_a) {
    var _b;
    var _c = _a.query, query = _c === void 0 ? exports.loginMutation : _c, variables = _a.variables, response = _a.res, config = _a.config;
    return __awaiter(this, void 0, void 0, function () {
        var _d, data, res, cookie;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    config = __1.getConfig(config);
                    return [4 /*yield*/, config.fetch(query, { variables: variables })
                        // Bigcommerce returns a Set-Cookie header with the auth cookie
                    ];
                case 1:
                    _d = _e.sent(), data = _d.data, res = _d.res;
                    cookie = res.headers.get('Set-Cookie');
                    if (cookie && typeof cookie === 'string') {
                        // In development, don't set a secure cookie or the browser will ignore it
                        if (process.env.NODE_ENV !== 'production') {
                            cookie = cookie.replace('; Secure', '');
                            // SameSite=none can't be set unless the cookie is Secure
                            // bc seems to sometimes send back SameSite=None rather than none so make 
                            // this case insensitive
                            cookie = cookie.replace(/; SameSite=none/gi, '; SameSite=lax');
                        }
                        response.setHeader('Set-Cookie', concat_cookie_1.default(response.getHeader('Set-Cookie'), cookie));
                    }
                    return [2 /*return*/, {
                            result: (_b = data.login) === null || _b === void 0 ? void 0 : _b.result,
                        }];
            }
        });
    });
}
exports.default = login;
