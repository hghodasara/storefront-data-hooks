"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCartItem = exports.parseWishlistItem = void 0;
exports.parseWishlistItem = function (item) { return ({
    product_id: item.productId,
    variant_id: item.variantId,
}); };
exports.parseCartItem = function (item) { return ({
    quantity: item.quantity,
    product_id: item.productId,
    variant_id: item.variantId,
    option_selections: item.optionSelections
}); };
