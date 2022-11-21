import Ali1 from "../assets/images/men/ali1.webp";
import Ali2 from "../assets/images/men/ali2.webp";
import Ali3 from "../assets/images/men/ali3.webp";
import Bli1 from "../assets/images/men/bli1.webp";
import Bli2 from "../assets/images/men/bli2.webp";
import Bli3 from "../assets/images/men/bli3.webp";
import Cli1 from "../assets/images/men/cli1.webp";
import Cli2 from "../assets/images/men/cli2.webp";
import Cli3 from "../assets/images/men/cli3.webp";
import Cli4 from "../assets/images/men/cli4.webp";
import Dli1 from "../assets/images/men/dli1.webp";
import Dli2 from "../assets/images/men/dli2.webp";
import Dli3 from "../assets/images/men/dli3.webp";
import Img1 from "../assets/images/men/img1.webp";
import Img2 from "../assets/images/men/img2.webp";
import Img3 from "../assets/images/men/img3.webp";
import Pro1 from "../assets/images/men/pro1.webp";
import Pro2 from "../assets/images/men/pro2.webp";
import Pro3 from "../assets/images/men/pro3.webp";
import Pro4 from "../assets/images/men/pro4.webp";
import Sli1 from "../assets/images/men/sli1.webp";
import Sli2 from "../assets/images/men/sli2.webp";
import Zli1 from "../assets/images/men/zli1.webp";
import Zli2 from "../assets/images/men/zli2.webp";

import Ao1 from "../assets/images/women/ao1.webp";
import Ao2 from "../assets/images/women/ao2.webp";
import Do1 from "../assets/images/women/do1.webp";
import Do2 from "../assets/images/women/do2.webp";
import Do3 from "../assets/images/women/do3.webp";
import Eo1 from "../assets/images/women/eo1.webp";
import Eo2 from "../assets/images/women/eo2.webp";
import Eo3 from "../assets/images/women/eo3.webp";
import Eo4 from "../assets/images/women/eo4.webp";
import Qo1 from "../assets/images/women/qo1.webp";
import Qo2 from "../assets/images/women/qo2.webp";
import Wo1 from "../assets/images/women/wo1.webp";
import Wo2 from "../assets/images/women/wo2.webp";
import Wo3 from "../assets/images/women/wo3.webp";
import Xo1 from "../assets/images/women/xo1.webp";
import Xo2 from "../assets/images/women/xo2.webp";
import Xo3 from "../assets/images/women/xo3.webp";
import Xo4 from "../assets/images/women/xo4.webp";

import Ak1 from "../assets/images/kids/ak1.webp";
import Ak2 from "../assets/images/kids/ak2.webp";
import Bk2 from "../assets/images/kids/bk1.webp";
import Ck2 from "../assets/images/kids/ck1.webp";
import Dk1 from "../assets/images/kids/dk1.webp";
import Dk2 from "../assets/images/kids/dk2.webp";
import Dk3 from "../assets/images/kids/dk3.webp";
import Sk1 from "../assets/images/kids/sk1.webp";
import Sk2 from "../assets/images/kids/sk2.webp";
import Sk3 from "../assets/images/kids/sk3.webp";
import Vk1 from "../assets/images/kids/vk1.webp";
import Vk2 from "../assets/images/kids/vk2.webp";
import Vk3 from "../assets/images/kids/vk3.webp";
import Xk1 from "../assets/images/kids/xk1.webp";
import Zk1 from "../assets/images/kids/zk1.webp";

import { Cart, Currencies, PathName, products, Routes } from "./types";
export const mockData: products[] = [
    {
        productID: 1,
        productName: "Shop Happy Sportswear Premium Essentials",
        type: "Men's Sleeve T-Shirt",
        price: 88,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "gray", code: "#D3D2D5" },
            { color: "Dark", code: "#2B2B2B" },
            { color: "green", code: "#0F6450" },
            { color: "green2", code: "#0b6450" },
        ],
        image: Ali1,
        imagePreviews: [Ali1, Ali2, Ali3],
        category: "men",
    },
    {
        productID: 2,
        productName: "Shop Happy Ankara",
        type: "Men's Short-Sleeve T-Shirt",
        price: 50,
        discountedPrice: 40,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Bli1,
        imagePreviews: [Bli1, Bli2, Bli3],
        category: "men",
    },
    {
        productID: 3,
        productName: "Shop Happy Premium Essentials Long",
        type: "Long-sleeve",
        price: 50,
        sizes: ["S", "M", "L"],
        colors: [
            { color: "gray", code: "#D3D2D5" },
            { color: "Dark", code: "#2B2B2B" },
            { color: "green", code: "#0F6450" },
            { color: "green2", code: "#0F6470" },
        ],
        image: Cli1,
        imagePreviews: [Cli1, Cli2, Cli3, Cli4],
        category: "men",
    },
    {
        productID: 4,
        productName: "Shop Happy short shirt",
        type: "Running shirt",
        price: 60,
        sizes: ["XL", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Dli1,
        imagePreviews: [Dli1, Dli2, Dli3],
        category: "men",
    },
    {
        productID: 5,
        productName: "Shop Happy Men Sport Shorts",
        type: "Running Short",
        price: 59,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "gray", code: "#D3D2D5" },
            { color: "Dark", code: "#2B2B2B" },
            { color: "green", code: "#0F6450" },
        ],
        image: Img1,
        imagePreviews: [Img1, Img2, Img3],
        category: "men",
    },
    {
        productID: 6,
        productName: "Shop Happy Dragon Wear",
        type: "Fight Shorts",
        price: 158,
        discountedPrice: 58,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "orange2", code: "#EA5120" },
        ],
        image: Pro1,
        imagePreviews: [Pro1, Pro2, Pro3, Pro4],
        category: "men",
    },
    {
        productID: 7,
        productName: "Shop Happy Dragon Wear Long",
        type: "Fight Shorts Long",
        price: 67,
        discountedPrice: 38,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
        ],
        image: Sli1,
        imagePreviews: [Sli1, Sli2],
        category: "men",
    },
    {
        productID: 8,
        productName: "Shop Happy Cut",
        type: "Cut Shorts",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
        ],
        image: Zli1,
        imagePreviews: [Zli1, Zli2],
        category: "men",
    },
    {
        productID: 9,
        productName: "Shop Happy Drop-Di",
        type: "Women graphic tank",
        price: 50,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
        ],
        image: Ao1,
        imagePreviews: [Ao1, Ao2],
        category: "women",
    },
    // {
    //     productID: 33,
    //     productName: "Shop Happy Drop-Di",
    //     type: "Women graphic tank",
    //     price: 230,
    //     sizes: ["XL", "S", "M", "L"],
    //     colors: [
    //         { color: "shy-blue", code: "#15A4C4" },
    //         { color: "Dark", code: "#1D1F22" },
    //     ],
    //     image: Ao1,
    //     imagePreviews: [Ao1, Ao2],
    //     category: "women",
    // },
    {
        productID: 10,
        productName: "Shop Happy Drop-Di Elment",
        type: "Women Star-Wars tank",
        price: 150,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Do1,
        imagePreviews: [Do1, Do2, Do3],
        category: "women",
    },
    {
        productID: 11,
        productName: "Shop Happy Toga Elment",
        type: "Women infinalon crop",
        price: 150,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "shy-blue", code: "#15A4C4" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "shy-blue1", code: "#15A4f4" },
        ],
        image: Eo1,
        imagePreviews: [Eo1, Eo2, Eo3, Eo4],
        category: "women",
    },
    {
        productID: 12,
        productName: "Shop Happy Aero-Shift Adv",
        type: "Women infinalon running crop",
        price: 123,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Qo1,
        imagePreviews: [Qo1, Qo2],
        category: "women",
    },
    {
        productID: 13,
        productName: "Shop Happy Alate Solo",
        type: "Women Light Support pad",
        price: 23,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Wo1,
        imagePreviews: [Wo1, Wo2, Wo3],
        category: "women",
    },
    {
        productID: 14,
        productName: "Shop Happy ACG",
        type: "Women Light T-Shirt",
        price: 127,
        discountedPrice: 77,
        sizes: ["XL", "S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Xo1,
        imagePreviews: [Xo1, Xo2, Xo3, Xo4],
        category: "women",
    },
    {
        productID: 15,
        productName: "Shop Happy Sport Wear Fleece",
        type: "Kids Light T-Shirt",
        price: 20,
        sizes: ["S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
        ],
        image: Ak1,
        imagePreviews: [Ak1, Ak2],
        category: "kids",
    },
    {
        productID: 16,
        productName: "Shop Happy Wall of Tee",
        type: "Kids Big T-Shirt",
        price: 25,
        sizes: ["S", "M", "L"],
        colors: [{ color: "orange", code: "#EA8120" }],
        image: Bk2,
        imagePreviews: [Bk2],
        category: "kids",
    },
    {
        productID: 17,
        productName: "Shop Happy Culture of Nawi",
        type: "Kids 2/3 pull",
        price: 243,
        discountedPrice: 43,
        sizes: ["S", "M", "L"],
        colors: [{ color: "Dark", code: "#1D1F22" }],
        image: Ck2,
        imagePreviews: [Ck2],
        category: "kids",
    },
    {
        productID: 18,
        productName: "Shop Happy Woo",
        type: "Kids 2/3 pull Woo",
        price: 44,
        sizes: ["S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "shy-blue", code: "#15A4C4" },
        ],
        image: Dk1,
        imagePreviews: [Dk1, Dk2, Dk3],
        category: "kids",
    },
    {
        productID: 19,
        productName: "Shop Happy Essentials Shine",
        type: "Kids 2/3 pull Shine",
        price: 10,
        sizes: ["S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "shy-blue", code: "#15A4C4" },
        ],
        image: Sk1,
        imagePreviews: [Sk1, Sk2, Sk3],
        category: "kids",
    },
    {
        productID: 20,
        productName: "Shop Happy Essentials Glow",
        type: "Kids 2/3 pull Glow",
        price: 35,
        discountedPrice: 15,
        sizes: ["S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "shy-blue", code: "#15A4C4" },
        ],
        image: Vk1,
        imagePreviews: [Vk1, Vk2, Vk3],
        category: "kids",
    },
    {
        productID: 21,
        productName: "Shop Happy Tech Flee",
        type: "Kids 2/3 pull Flee",
        price: 17,
        sizes: ["S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "orange", code: "#EA8120" },
            { color: "shy-blue", code: "#15A4C4" },
        ],
        image: Xk1,
        imagePreviews: [Xk1],
        category: "kids",
    },
    {
        productID: 22,
        productName: "Shop Happy stadium Away",
        type: "Kids 2/3 pull stadium",
        price: 199,
        sizes: ["S", "M", "L"],
        colors: [
            { color: "Dark", code: "#1D1F22" },
            { color: "shy-blue", code: "#15A4C4" },
        ],
        image: Zk1,
        imagePreviews: [Zk1],
        category: "kids",
    },
];

export const pathName: PathName = {
    "/": "Men",
    "/women": "Women",
    "/kids": "Kids",
};

export const routes: Routes[] = [
    {
        title: "Men",
        path: "/",
    },
    {
        title: "Women",
        path: "/women",
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

export const fetchProductByCategory = (products: products[], category: string) => {
    return products.filter((product) => product.category === category);
};

export const getCartFromLocalStorage = () => {
    if (typeof localStorage !== "undefined") {
        const getCartItems = localStorage.getItem("cart");
        const cart = getCartItems ? JSON.parse(getCartItems) : [];

        return cart;
    }
};
export const setCarttoLocalStorage = (cart: Cart[]) => {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
};
