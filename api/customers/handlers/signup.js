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
var errors_1 = require("../../utils/errors");
var login_1 = __importDefault(require("../../operations/login"));
var signup = function (_a) {
    var res = _a.res, _b = _a.body, firstName = _b.firstName, lastName = _b.lastName, email = _b.email, password = _b.password, config = _a.config;
    return __awaiter(void 0, void 0, void 0, function () {
        var error_1, hasEmailError;
        var _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    // TODO: Add proper validations with something like Ajv
                    if (!(firstName && lastName && email && password)) {
                        return [2 /*return*/, res.status(400).json({
                                data: null,
                                errors: [{ message: 'Invalid request' }],
                            })];
                    }
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, config.storeApiFetch('/v3/customers', {
                            method: 'POST',
                            body: JSON.stringify([
                                {
                                    first_name: firstName,
                                    last_name: lastName,
                                    email: email,
                                    authentication: {
                                        new_password: password,
                                    },
                                },
                            ]),
                        })];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _d.sent();
                    if (error_1 instanceof errors_1.BigcommerceApiError && error_1.status === 422) {
                        hasEmailError = '0.email' in ((_c = error_1.data) === null || _c === void 0 ? void 0 : _c.errors);
                        // If there's an error with the email, it most likely means it's duplicated
                        if (hasEmailError) {
                            return [2 /*return*/, res.status(400).json({
                                    data: null,
                                    errors: [
                                        {
                                            message: 'The email is already in use',
                                            code: 'duplicated_email',
                                        },
                                    ],
                                })];
                        }
                    }
                    throw error_1;
                case 4: 
                // Login the customer right after creating it
                return [4 /*yield*/, login_1.default({ variables: { email: email, password: password }, res: res, config: config })];
                case 5:
                    // Login the customer right after creating it
                    _d.sent();
                    res.status(200).json({ data: null });
                    return [2 /*return*/];
            }
        });
    });
};
exports.default = signup;