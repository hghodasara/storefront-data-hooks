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
var __1 = require("..");
var get_all_products_1 = __importDefault(require("./get-all-products"));
function getCustomerWishlist(_a) {
    var _b, _c;
    var config = _a.config, variables = _a.variables, includeProducts = _a.includeProducts;
    return __awaiter(this, void 0, void 0, function () {
        var _d, data, wishlist, entityIds, graphqlData, productsById_1;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    config = __1.getConfig(config);
                    return [4 /*yield*/, config.storeApiFetch("/v3/wishlists?customer_id=" + variables.customerId)];
                case 1:
                    _d = (_e.sent()).data, data = _d === void 0 ? [] : _d;
                    wishlist = data[0];
                    if (!(includeProducts && ((_b = wishlist === null || wishlist === void 0 ? void 0 : wishlist.items) === null || _b === void 0 ? void 0 : _b.length))) return [3 /*break*/, 3];
                    entityIds = (_c = wishlist.items) === null || _c === void 0 ? void 0 : _c.map(function (item) { return item === null || item === void 0 ? void 0 : item.product_id; }).filter(function (id) { return !!id; });
                    if (!(entityIds === null || entityIds === void 0 ? void 0 : entityIds.length)) return [3 /*break*/, 3];
                    return [4 /*yield*/, get_all_products_1.default({
                            variables: { first: 100, entityIds: entityIds },
                            config: config,
                        })
                        // Put the products in an object that we can use to get them by id
                    ];
                case 2:
                    graphqlData = _e.sent();
                    productsById_1 = graphqlData.products.reduce(function (prods, p) {
                        prods[p.node.entityId] = p;
                        return prods;
                    }, {});
                    // Populate the wishlist items with the graphql products
                    wishlist.items.forEach(function (item) {
                        var product = item && productsById_1[item.product_id];
                        if (item && product) {
                            item.product = product.node;
                        }
                    });
                    _e.label = 3;
                case 3: return [2 /*return*/, { wishlist: wishlist }];
            }
        });
    });
}
exports.default = getCustomerWishlist;
