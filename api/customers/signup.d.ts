import { BigcommerceHandler } from '../utils/create-api-handler';
export declare type SignupBody = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
export declare type SignupHandlers = {
    signup: BigcommerceHandler<null, {
        cartId?: string;
    } & Partial<SignupBody>>;
};
declare const _default: ({ config, operations, options, }?: {
    config?: import("..").BigcommerceConfig | undefined;
    operations?: Partial<{
        signup: BigcommerceHandler<null, {
            cartId?: string | undefined;
        } & Partial<SignupBody>>;
    }> | undefined;
    options?: Partial<{}> | undefined;
}) => import("next").NextApiHandler<any>;
export default _default;
