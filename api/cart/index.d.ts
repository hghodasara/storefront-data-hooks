import { BigcommerceHandler } from '../utils/create-api-handler';
declare type OptionSelections = {
    option_id: Number;
    option_value: Number | String;
};
export declare type ItemBody = {
    productId: number;
    variantId?: number;
    quantity?: number;
    optionSelections?: OptionSelections;
};
export declare type AddItemBody = {
    item: ItemBody;
};
export declare type UpdateItemBody = {
    itemId: string;
    item: ItemBody;
};
export declare type RemoveItemBody = {
    itemId: string;
};
export declare type Coupon = {
    code: string;
    id: string;
    coupon_type: string;
    discounted_amount: number;
};
export declare type Discount = {
    id: number;
    discounted_amount: number;
};
export declare type Option = {
    name?: string;
    name_id?: number;
    value?: string;
    value_id?: number;
};
export declare type BaseItem = {
    id: string;
    variant_id: number;
    product_id: number;
    sku?: string;
    name?: string;
    url?: string;
    quantity: number;
    is_taxable?: boolean;
    image_url?: string;
    discounts?: Discount[];
    coupons?: Coupon[];
    discount_amount?: number;
    coupon_amount?: number;
    list_price?: number;
    sale_price?: number;
    extended_list_price?: number;
    extended_sale_price?: number;
    options?: Option[];
};
export declare type CustomItem = {
    id: string;
    sku?: string;
    name?: string;
    quantity?: number;
    list_price?: number;
    extended_list_price?: number;
};
export declare type PhysicalItem = BaseItem & {
    is_require_shipping?: boolean;
    gift_wrapping?: {
        name?: string;
        message?: string;
        amount?: number;
    };
};
export declare type DigitalItem = BaseItem & {
    download_file_urls?: string[];
    download_page_url?: string;
    download_size: string;
};
export declare type Gift_Certificate = {
    id: string;
    name: string;
    theme: string;
    amount: number;
    is_taxable?: boolean;
    sender: {
        name?: string;
        email?: string;
    };
    receipt: {
        name?: string;
        email?: string;
    };
    message?: string;
};
export declare type Cart = {
    id: string;
    parent_id?: string;
    customer_id: number;
    email: string;
    currency: {
        code: string;
    };
    tax_included: boolean;
    base_amount: number;
    discount_amount: number;
    cart_amount: number;
    coupons?: Coupon[];
    discounts?: Discount[];
    line_items: {
        physical_items: PhysicalItem[];
        digital_items: DigitalItem[];
        gift_certificates: Gift_Certificate[];
        custom_items: CustomItem[];
    };
    created_time: string;
    updated_time: string;
    channel_id: number;
};
export declare type CartHandlers = {
    getCart: BigcommerceHandler<Cart, {
        cartId?: string;
    }>;
    addItem: BigcommerceHandler<Cart, {
        cartId?: string;
    } & Partial<AddItemBody>>;
    updateItem: BigcommerceHandler<Cart, {
        cartId?: string;
    } & Partial<UpdateItemBody>>;
    removeItem: BigcommerceHandler<Cart, {
        cartId?: string;
    } & Partial<RemoveItemBody>>;
};
export declare const handlers: {
    getCart: BigcommerceHandler<Cart, {
        cartId?: string | undefined;
    }>;
    addItem: BigcommerceHandler<Cart, {
        cartId?: string | undefined;
    } & Partial<AddItemBody>>;
    updateItem: BigcommerceHandler<Cart, {
        cartId?: string | undefined;
    } & Partial<UpdateItemBody>>;
    removeItem: BigcommerceHandler<Cart, {
        cartId?: string | undefined;
    } & Partial<RemoveItemBody>>;
};
declare const _default: ({ config, operations, options, }?: {
    config?: import("..").BigcommerceConfig | undefined;
    operations?: Partial<{
        getCart: BigcommerceHandler<Cart, {
            cartId?: string | undefined;
        }>;
        addItem: BigcommerceHandler<Cart, {
            cartId?: string | undefined;
        } & Partial<AddItemBody>>;
        updateItem: BigcommerceHandler<Cart, {
            cartId?: string | undefined;
        } & Partial<UpdateItemBody>>;
        removeItem: BigcommerceHandler<Cart, {
            cartId?: string | undefined;
        } & Partial<RemoveItemBody>>;
    }> | undefined;
    options?: Partial<{}> | undefined;
}) => import("next").NextApiHandler<any>;
export default _default;
