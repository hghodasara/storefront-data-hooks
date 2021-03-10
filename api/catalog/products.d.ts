import { BigcommerceHandler } from '../utils/create-api-handler';
import type { ProductEdge } from '../operations/get-all-products';
export declare type SearchProductsData = {
    products: ProductEdge[];
    found: boolean;
};
export declare type ProductsHandlers = {
    getProducts: BigcommerceHandler<SearchProductsData, {
        search?: 'string';
        category?: string;
        categories?: string;
        brand?: string;
        sort?: string;
    }>;
};
export declare const handlers: {
    getProducts: BigcommerceHandler<SearchProductsData, {
        search?: "string" | undefined;
        category?: string | undefined;
        categories?: string | undefined;
        brand?: string | undefined;
        sort?: string | undefined;
    }>;
};
declare const _default: ({ config, operations, options, }?: {
    config?: import("..").BigcommerceConfig | undefined;
    operations?: Partial<{
        getProducts: BigcommerceHandler<SearchProductsData, {
            search?: "string" | undefined;
            category?: string | undefined;
            categories?: string | undefined;
            brand?: string | undefined;
            sort?: string | undefined;
        }>;
    }> | undefined;
    options?: Partial<{}> | undefined;
}) => import("next").NextApiHandler<any>;
export default _default;
