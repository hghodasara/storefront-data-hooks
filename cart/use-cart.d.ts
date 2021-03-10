import type { HookFetcher } from '.././commerce/utils/types';
import type { SwrOptions } from '.././commerce/utils/use-data';
import { CartInput } from '.././commerce/cart/use-cart';
import type { Cart } from '../api/cart';
export type { Cart };
export declare const fetcher: HookFetcher<Cart | null, CartInput>;
export declare function extendHook(customFetcher: typeof fetcher, swrOptions?: SwrOptions<Cart | null, CartInput>): {
    (): import("../commerce/cart/use-cart").CartResponse<Cart | null>;
    extend: typeof extendHook;
};
declare const _default: {
    (): import("../commerce/cart/use-cart").CartResponse<Cart | null>;
    extend: typeof extendHook;
};
export default _default;
