import { ReactNode, MutableRefObject } from 'react';
import { Fetcher } from './utils/types';
export declare type CommerceProps = {
    children?: ReactNode;
    config: CommerceConfig;
};
export declare type CommerceConfig = {
    fetcher: Fetcher<any>;
} & Omit<CommerceContextValue, 'fetcherRef'>;
export declare type CommerceContextValue = {
    fetcherRef: MutableRefObject<Fetcher<any>>;
    locale: string;
    cartCookie: string;
};
export declare function CommerceProvider({ children, config }: CommerceProps): JSX.Element;
export declare function useCommerce<T extends CommerceContextValue>(): T;
