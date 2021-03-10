/// <reference types="lodash" />
export default function useCartActions(item: any): {
    addItem: (input: import("../api/cart").ItemBody) => Promise<import("./use-cart").Cart>;
    updateItem: import("lodash").DebouncedFunc<(input: Partial<{
        id: string;
    } & import("../api/cart").ItemBody>) => Promise<import("./use-cart").Cart | null>>;
    removeItem: (input: import("./use-remove-item").RemoveItemInput) => Promise<import("./use-cart").Cart | null>;
};
