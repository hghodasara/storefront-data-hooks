import { FetcherOptions, HookFetcher } from '.././commerce/utils/types';
import type { RemoveItemBody } from '../api/cart';
import { Cart } from './use-cart';
export declare type RemoveItemInput = {
    id: string;
};
export declare const fetcher: HookFetcher<Cart | null, RemoveItemBody>;
export declare function extendHook(customFetcher: typeof fetcher): {
    (item?: any, params?: {
        options: FetcherOptions;
    } | undefined): (input: RemoveItemInput) => Promise<Cart | null>;
    extend: typeof extendHook;
};
declare const _default: {
    (item?: any, params?: {
        options: FetcherOptions;
    } | undefined): (input: RemoveItemInput) => Promise<Cart | null>;
    extend: typeof extendHook;
};
export default _default;
