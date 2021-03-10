import type { ItemBody as WishlistItemBody } from '../wishlist';
import type { ItemBody } from '../cart';
export declare const parseWishlistItem: (item: WishlistItemBody) => {
    product_id: number;
    variant_id: number | undefined;
};
export declare const parseCartItem: (item: ItemBody) => {
    quantity: number | undefined;
    product_id: number;
    variant_id: number | undefined;
    option_selections: {
        option_id: Number;
        option_value: String | Number;
    } | undefined;
};
