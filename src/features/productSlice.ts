import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { Cart, cartUpdateColor, cartUpdateSize, Currencies, products } from "../utiles/types";
import { mockData } from "../utiles/utiles";

// Define a type for the slice state
interface Shop {
    mockProducts: products[];
    currency: Currencies;
    cart: Cart[];
}

// Define the initial state using that type
const initialState: Shop = {
    mockProducts: mockData,
    currency: {
        currency: "USD",
        symbol: "$",
    },
    cart: [],
};

export const shopSlice = createSlice({
    name: "shop",

    initialState,
    reducers: {
        changeCurrency: (state, action: PayloadAction<Currencies>) => {
            state.currency = action.payload;
        },
        addProductToCart: (state, action: PayloadAction<Cart>) => {
            if (state.cart.some((product) => product.productID === action.payload.productID)) return;
            state.cart = [...state.cart, action.payload];
        },
        incrementCartQuantity: (state, action: PayloadAction<number>) => {
            // console.log(state);
            const getCartIndex = state.cart.findIndex((cart) => cart.productID === action.payload);
            const updateCart: Cart = {
                ...state.cart[getCartIndex],
                quantity: (state.cart[getCartIndex].quantity += 1),
            };
            state.cart[getCartIndex] = updateCart;
        },
        decrementCartQuantity: (state, action: PayloadAction<number>) => {
            const getCartIndex = state.cart.findIndex((cart) => cart.productID === action.payload);
            const updateCart: Cart = {
                ...state.cart[getCartIndex],
                quantity: state.cart[getCartIndex].quantity !== 1 ? (state.cart[getCartIndex].quantity -= 1) : 1,
            };
            state.cart[getCartIndex] = updateCart;
        },
        updateCartColor: (state, action: PayloadAction<cartUpdateColor>) => {
            const getCartIndex = state.cart.findIndex((cart) => cart.productID === action.payload.productID);
            const updateCart: Cart = {
                ...state.cart[getCartIndex],
                selectedColor: action.payload.color,
            };
            state.cart[getCartIndex] = updateCart;
        },
        updateCartSize: (state, action: PayloadAction<cartUpdateSize>) => {
            const getCartIndex = state.cart.findIndex((cart) => cart.productID === action.payload.productID);
            const updateCart: Cart = {
                ...state.cart[getCartIndex],
                selectedSize: action.payload.size,
            };
            state.cart[getCartIndex] = updateCart;
        },
    },
});

export const { changeCurrency, addProductToCart, incrementCartQuantity, decrementCartQuantity, updateCartColor, updateCartSize } =
    shopSlice.actions;

export const selectAllProducts = (state: RootState) => state.shop.mockProducts;
export const selectCurrency = (state: RootState) => state.shop.currency;
export const selectCart = (state: RootState) => state.shop.cart;

export default shopSlice.reducer;
