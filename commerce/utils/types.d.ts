export declare type Fetcher<T> = (options: FetcherOptions) => T | Promise<T>;
export declare type FetcherOptions = {
    url?: string;
    query?: string;
    method?: string;
    variables?: any;
    body?: any;
};
export declare type HookFetcher<Result, Input = null> = (options: HookFetcherOptions | null, input: Input, fetch: <T = Result>(options: FetcherOptions) => Promise<T>) => Result | Promise<Result>;
export declare type HookFetcherOptions = {
    query?: string;
    url?: string;
    method?: string;
};
export declare type HookInput = [string, string | number | boolean | undefined][];
