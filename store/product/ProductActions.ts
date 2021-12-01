export const initialProduct = {
    name: "product name",
    price: 43.99
}

export enum EProductActions {
    SET_PRODUCT = "SET_PRODUCT"
}

export const setProduct = (product: Record<any, any>) => ({
    type: EProductActions.SET_PRODUCT,
    payload: product
});