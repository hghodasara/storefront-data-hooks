import type { HookFetcher } from '.././commerce/utils/types';
import type { ItemBody, AddItemBody } from '../api/cart';
import { Cart } from './use-cart';
export declare type AddItemInput = ItemBody;
export declare const fetcher: HookFetcher<Cart, AddItemBody>;
export declare function extendHook(customFetcher: typeof fetcher): {
    (): (input: AddItemInput) => Promise<Cart>;
    extend: typeof extendHook;
};
declare const _default: {
    (): (input: ItemBody) => Promise<Cart>;
    extend: typeof extendHook;
};
export default _default;
