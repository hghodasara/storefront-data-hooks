/// <reference types="lodash" />
import type { HookFetcher } from '.././commerce/utils/types';
import type { ItemBody, PhysicalItem, UpdateItemBody } from '../api/cart';
import { Cart } from './use-cart';
export declare type UpdateItemInput = Partial<{
    id: string;
} & ItemBody>;
export declare const fetcher: HookFetcher<Cart | null, UpdateItemBody>;
declare function extendHook(customFetcher: typeof fetcher, cfg?: {
    wait?: number;
}): {
    (item: PhysicalItem): import("lodash").DebouncedFunc<(input: UpdateItemInput) => Promise<Cart | null>>;
    extend: typeof extendHook;
};
declare const _default: {
    (item: PhysicalItem): import("lodash").DebouncedFunc<(input: Partial<{
        id: string;
    } & ItemBody>) => Promise<Cart | null>>;
    extend: typeof extendHook;
};
export default _default;
