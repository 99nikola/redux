export const initialProduct = {
    name: "product name",
    price: 43.99
}

export enum EProductActions {
    SET_PRODUCT = "SET_PRODUCT"
}

export const fetchProduct = () => (
    (dispatch: any) => {
        fetch("https://jsonplaceholder.typicode.com/posts/10")
            .then(response => response.json())
            .then(post => dispatch(setProduct({
                name: post.title,
                price: post.id
            })))
            .catch(error => console.error(error));
    }
);

export const setProduct = (product: Record<any, any>) => ({
    type: EProductActions.SET_PRODUCT,
    payload: product
});