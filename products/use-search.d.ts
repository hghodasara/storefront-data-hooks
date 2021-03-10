import type { HookFetcher } from '.././commerce/utils/types';
import type { SwrOptions } from '.././commerce/utils/use-data';
import type { SearchProductsData } from '../api/catalog/products';
export declare type SearchProductsInput = {
    search?: string;
    categoryId?: number;
    categoryIds?: number[];
    brandId?: number;
    sort?: string;
};
export declare type SearchProductsPayload = Omit<SearchProductsInput, "categoryIds"> & {
    stringifiedCategoryIds?: string;
};
export declare const fetcher: HookFetcher<SearchProductsData, SearchProductsPayload>;
export declare function extendHook(customFetcher: typeof fetcher, swrOptions?: SwrOptions<SearchProductsData, SearchProductsPayload>): {
    (input?: SearchProductsInput): import("swr").responseInterface<SearchProductsData, import("../commerce/utils/errors").CommerceError>;
    extend: typeof extendHook;
};
declare const _default: {
    (input?: SearchProductsInput): import("swr").responseInterface<SearchProductsData, import("../commerce/utils/errors").CommerceError>;
    extend: typeof extendHook;
};
export default _default;
