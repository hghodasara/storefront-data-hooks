import { BigcommerceHandler } from '../utils/create-api-handler';
import { Customer } from './handlers/get-logged-in-customer';
export type { Customer };
export declare type CustomerData = {
    customer: Customer;
};
export declare type CustomersHandlers = {
    getLoggedInCustomer: BigcommerceHandler<CustomerData>;
};
declare const _default: ({ config, operations, options, }?: {
    config?: import("..").BigcommerceConfig | undefined;
    operations?: Partial<{
        getLoggedInCustomer: BigcommerceHandler<CustomerData, null>;
    }> | undefined;
    options?: Partial<{}> | undefined;
}) => import("next").NextApiHandler<any>;
export default _default;
