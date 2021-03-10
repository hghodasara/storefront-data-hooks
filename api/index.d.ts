import type { RequestInit } from '@vercel/fetch';
import type { CommerceAPIConfig } from '.././commerce/api';
export interface BigcommerceConfig extends CommerceAPIConfig {
    applyLocale?: boolean;
    storeApiUrl: string;
    storeApiToken: string;
    storeApiClientId: string;
    storeChannelId?: string;
    storeApiFetch<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
export declare class Config {
    private config;
    constructor(config: Omit<BigcommerceConfig, 'customerCookie'>);
    getConfig(userConfig?: Partial<BigcommerceConfig>): BigcommerceConfig;
    setConfig(newConfig: Partial<BigcommerceConfig>): void;
}
export declare function getConfig(userConfig?: Partial<BigcommerceConfig>): BigcommerceConfig;
export declare function setConfig(newConfig: Partial<BigcommerceConfig>): void;
