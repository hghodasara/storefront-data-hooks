import type { FetcherOptions, HookFetcher } from '.././commerce/utils/types';
import type { ItemBody, AddItemBody } from '../api/cart';
import { Cart } from './use-cart';
export declare type AddItemInput = ItemBody;
export declare const fetcher: HookFetcher<Cart, AddItemBody>;
export declare function extendHook(customFetcher: typeof fetcher): {
    (params?: {
        options: FetcherOptions;
    } | undefined): (input: AddItemInput) => Promise<Cart>;
    extend: typeof extendHook;
};
declare const _default: {
    (params?: {
        options: FetcherOptions;
    } | undefined): (input: ItemBody) => Promise<Cart>;
    extend: typeof extendHook;
};
export default _default;
