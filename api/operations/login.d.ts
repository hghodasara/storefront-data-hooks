/// <reference types="node" />
import type { ServerResponse } from 'http';
import type { LoginMutationVariables } from '../../schema';
import { BigcommerceConfig } from '..';
export declare const loginMutation = "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      result\n    }\n  }\n";
export declare type LoginResult<T extends {
    result?: any;
} = {
    result?: string;
}> = T;
export declare type LoginVariables = LoginMutationVariables;
declare function login(opts: {
    variables: LoginVariables;
    config?: BigcommerceConfig;
    res: ServerResponse;
}): Promise<LoginResult>;
declare function login<T extends {
    result?: any;
}, V = any>(opts: {
    query: string;
    variables: V;
    res: ServerResponse;
    config?: BigcommerceConfig;
}): Promise<LoginResult<T>>;
export default login;
