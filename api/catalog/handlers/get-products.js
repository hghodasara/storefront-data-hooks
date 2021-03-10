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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_all_products_1 = __importDefault(require("../../operations/get-all-products"));
var SORT = {
    latest: 'id',
    trending: 'total_sold',
    price: 'price',
};
var LIMIT = 12;
// Return current cart info
var getProducts = function (_a) {
    var res = _a.res, _b = _a.body, search = _b.search, category = _b.category, categories = _b.categories, brand = _b.brand, sort = _b.sort, config = _a.config;
    return __awaiter(void 0, void 0, void 0, function () {
        var url, categoriesIn, _c, _sort, direction, sortValue, data, entityIds, found, graphqlData, productsById, products;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    url = new URL('/v3/catalog/products', 'http://a');
                    url.searchParams.set('is_visible', 'true');
                    url.searchParams.set('limit', String(LIMIT));
                    if (search)
                        url.searchParams.set('keyword', search);
                    categoriesIn = __spreadArrays((categories === null || categories === void 0 ? void 0 : categories.split(',')) || [], [category]).reduce(function (acc, category) {
                        if (category && Number.isInteger(Number(category)))
                            return __spreadArrays(acc, [category]);
                        return acc;
                    }, []);
                    if (categoriesIn.length > 0)
                        url.searchParams.set('categories:in', categoriesIn.join(','));
                    if (brand && Number.isInteger(Number(brand)))
                        url.searchParams.set('brand_id', brand);
                    if (sort) {
                        _c = sort.split('-'), _sort = _c[0], direction = _c[1];
                        sortValue = SORT[_sort];
                        if (sortValue && direction) {
                            url.searchParams.set('sort', sortValue);
                            url.searchParams.set('direction', direction);
                        }
                    }
                    // We only want the id of each product
                    url.searchParams.set('include_fields', 'id');
                    return [4 /*yield*/, config.storeApiFetch(url.pathname + url.search)];
                case 1:
                    data = (_d.sent()).data;
                    entityIds = data.map(function (p) { return p.id; });
                    found = entityIds.length > 0;
                    return [4 /*yield*/, get_all_products_1.default({
                            variables: { first: LIMIT, entityIds: entityIds },
                            config: config,
                        })
                        // Put the products in an object that we can use to get them by id
                    ];
                case 2:
                    graphqlData = _d.sent();
                    productsById = graphqlData.products.reduce(function (prods, p) {
                        prods[p.node.entityId] = p;
                        return prods;
                    }, {});
                    products = found ? [] : graphqlData.products;
                    // Populate the products array with the graphql products, in the order
                    // assigned by the list of entity ids
                    entityIds.forEach(function (id) {
                        var product = productsById[id];
                        if (product)
                            products.push(product);
                    });
                    res.status(200).json({ data: { products: products, found: found } });
                    return [2 /*return*/];
            }
        });
    });
};
exports.default = getProducts;
