"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUrl = void 0;
var defaultUrl = {
    url: process.env.NEXT_PUBLIC_CART_URL || '/api/bigcommerce/cart',
};
exports.defaultUrl = defaultUrl;
