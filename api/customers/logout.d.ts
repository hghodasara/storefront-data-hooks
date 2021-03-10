import { BigcommerceHandler } from '../utils/create-api-handler';
export declare type LogoutHandlers = {
    logout: BigcommerceHandler<null, {
        redirectTo?: string;
    }>;
};
declare const _default: ({ config, operations, options, }?: {
    config?: import("..").BigcommerceConfig | undefined;
    operations?: Partial<{
        logout: BigcommerceHandler<null, {
            redirectTo?: string | undefined;
        }>;
    }> | undefined;
    options?: Partial<{}> | undefined;
}) => import("next").NextApiHandler<any>;
export default _default;
