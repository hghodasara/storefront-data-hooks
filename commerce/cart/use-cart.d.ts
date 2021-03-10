import type { responseInterface } from 'swr';
import type { HookInput, HookFetcher, HookFetcherOptions } from '../utils/types';
import { SwrOptions } from '../utils/use-data';
export declare type CartResponse<Result> = responseInterface<Result, Error> & {
    isEmpty: boolean;
};
export declare type CartInput = {
    cartId: string | undefined;
};
export default function useCart<Result>(options: HookFetcherOptions, input: HookInput, fetcherFn: HookFetcher<Result, CartInput>, swrOptions?: SwrOptions<Result, CartInput>): CartResponse<Result>;
