import { EProductActions, initialProduct } from "./ProductActions";
import { AnyAction } from "redux";

export const ProductReducer = (state = initialProduct, action: AnyAction) => {
    switch (action.type) {
        case EProductActions.SET_PRODUCT:
            return ({
                ...action.payload
            });      
        default:
            return state;
    }
}