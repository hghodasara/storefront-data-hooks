import { BigcommerceHandler } from '../utils/create-api-handler';
export declare type LoginBody = {
    email: string;
    password: string;
};
export declare type LoginHandlers = {
    login: BigcommerceHandler<null, Partial<LoginBody>>;
};
declare const _default: ({ config, operations, options, }?: {
    config?: import("..").BigcommerceConfig | undefined;
    operations?: Partial<{
        login: BigcommerceHandler<null, Partial<LoginBody>>;
    }> | undefined;
    options?: Partial<{}> | undefined;
}) => import("next").NextApiHandler<any>;
export default _default;
