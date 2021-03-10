import { ReactNode } from 'react';
import { CommerceConfig } from './commerce';
export declare const bigcommerceConfig: CommerceConfig;
export declare type BigcommerceConfig = Partial<CommerceConfig>;
export declare type BigcommerceProps = {
    children?: ReactNode;
    locale: string;
} & BigcommerceConfig;
export declare function CommerceProvider({ children, ...config }: BigcommerceProps): JSX.Element;
export declare const useCommerce: () => import("./commerce").CommerceContextValue;
