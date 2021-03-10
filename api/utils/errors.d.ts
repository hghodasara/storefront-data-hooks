import type { Response } from '@vercel/fetch';
export declare class BigcommerceGraphQLError extends Error {
}
export declare class BigcommerceApiError extends Error {
    status: number;
    res: Response;
    data: any;
    constructor(msg: string, res: Response, data?: any);
}
export declare class BigcommerceNetworkError extends Error {
    constructor(msg: string);
}
