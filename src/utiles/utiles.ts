import Image1 from "../assets/images/Image.png";
import Image2 from "../assets/images/Image2.png";
import Image3 from "../assets/images/Image3.png";
import Image4 from "../assets/images/Image4.png";
import Image5 from "../assets/images/Image5.png";
import Image6 from "../assets/images/Image6.png";

import { Cart, Currencies, PathName, products, Routes } from "./types";
export const mockData: products[] = [
    {
        productID: 1,
        productName: "Apollo",
        type: "Running Short",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "gray", code: "#D3D2D5" },
            { color: "Dark", code: "#2B2B2B" },
            { color: "green", code: "#0F6450" },
        ],
        image: Image1,
        imagePreviews: [Image1, Image2, Image1],
    },
    {
        productID: 2,
        productName: "Apollo",
        type: "Running Short",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Image2,
        imagePreviews: [Image2, Image2, Image2],
    },
    {
        productID: 3,
        productName: "Apollo",
        type: "Running Short",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "gray", code: "#D3D2D5" },
            { color: "Dark", code: "#2B2B2B" },
            { color: "green", code: "#0F6450" },
        ],
        image: Image3,
        imagePreviews: [Image3, Image3, Image3],
    },
    {
        productID: 4,
        productName: "Apollo",
        type: "Running Short",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Image4,
        imagePreviews: [Image4, Image4, Image4],
    },
    {
        productID: 5,
        productName: "Apollo",
        type: "Running Short",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "gray", code: "#D3D2D5" },
            { color: "Dark", code: "#2B2B2B" },
            { color: "green", code: "#0F6450" },
        ],
        image: Image5,
        imagePreviews: [Image5, Image5, Image5],
    },
    {
        productID: 6,
        productName: "Apollo",
        type: "Running Short",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Image6,
        imagePreviews: [Image6, Image6, Image6],
    },
];

export const pathName: PathName = {
    "/men": "Men",
    "/women": "Women",
    "/": "Women",
    "/kids": "Kids",
};

export const routes: Routes[] = [
    {
        title: "Women",
        path: "/",
    },
    {
        title: "Men",
        path: "/men",
    },
    {
        title: "Kids",
        path: "/kids",
    },
];

export const currencies: Currencies[] = [
    {
        currency: "USD",
        symbol: "$",
    },
    {
        currency: "EUR",
        symbol: "€",
    },
    {
        currency: "JPY",
        symbol: "¥",
    },
];

export const formatToCurrency = (currencyCode: string, number: number): string => {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currencyCode,
    }).format(number);
};

export const getCartTotoalPrice = (cart: Cart[]) => {
    return cart.reduce((previousValue, currentValue: Cart) => previousValue + currentValue.price * currentValue.quantity, 0);
};

export const getCartTotoalQuantity = (cart: Cart[]) => {
    return cart.reduce((previousValue, currentValue: Cart) => previousValue + currentValue.quantity, 0);
};

export const getProductsInCart = (products: products[], cart: Cart[]) => {
    return products.filter((product) => cart.map((cart) => cart.productID).includes(product.productID));
};
