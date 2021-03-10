"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCommerce = exports.CommerceProvider = void 0;
var react_1 = require("react");
var React = __importStar(require("react"));
var Commerce = react_1.createContext({});
function CommerceProvider(_a) {
    var children = _a.children, config = _a.config;
    if (!config) {
        throw new Error('CommerceProvider requires a valid config object');
    }
    var fetcherRef = react_1.useRef(config.fetcher);
    // Because the config is an object, if the parent re-renders this provider
    // will re-render every consumer unless we memoize the config
    var cfg = react_1.useMemo(function () { return ({
        fetcherRef: fetcherRef,
        locale: config.locale,
        cartCookie: config.cartCookie,
    }); }, [config.locale, config.cartCookie]);
    return React.createElement(Commerce.Provider, { value: cfg }, children);
}
exports.CommerceProvider = CommerceProvider;
function useCommerce() {
    return react_1.useContext(Commerce);
}
exports.useCommerce = useCommerce;
