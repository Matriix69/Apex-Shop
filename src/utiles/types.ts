export interface products {
    productID: number;
    productName: string;
    type: string;
    price: number;
    sizes: string[];
    colors: {
        color: string;
        code: string;
    }[];
    image: string;
    imagePreviews: string[];
    category?: string;
    discountedPrice?: number;
}

export interface Routes {
    title: string;
    path: string;
}

export interface PathName {
    [key: string]: string;
}

export interface Currencies {
    currency: string;
    symbol: string;
}

export interface Cart {
    productID: number;
    selectedSize: string;
    selectedColor: string;
    quantity: number;
    price: number;
}

export interface cartUpdateColor {
    productID: number;
    color: string;
}
export interface cartUpdateSize {
    productID: number;
    size: string;
}
