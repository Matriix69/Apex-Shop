import "./singleProuct.scss";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { Cart as CartType, products } from "../../utiles/types";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { formatToCurrency } from "../../utiles/utiles";
import { addProductToCart } from "../../features/productSlice";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/Widowsize";

const SingleProduct = ({ product }: { product: products }) => {
    const { height, width } = useWindowDimensions();
    const dispatch = useAppDispatch();

    const { productName, type, price, image, productID, sizes, colors, imagePreviews, discountedPrice } = product;
    const currentCurrency = useAppSelector((state) => state.shop.currency);

    const [previewMore, setPreviewMore] = useState(false);
    const [mainPreviewImage, setMainPreviewImage] = useState("");

    const getCartValues: CartType = {
        productID: productID,
        selectedSize: sizes[0],
        selectedColor: colors[0].color,
        quantity: 1,
        price: price,
    };

    const togglePreviewImages = (state: boolean) => {
        if (width < 800) return;
        setPreviewMore(state);
    };

    return (
        <div
            className="SingleProduct"
            onMouseEnter={() => togglePreviewImages(true)}
            onMouseLeave={() => togglePreviewImages(false)}
        >
            <div className="SingleProduct_image">
                <Link to={`/product/${productID}`}>
                    <img src={mainPreviewImage || image} />
                </Link>

                <button
                    title="Add to cart"
                    aria-label="Add to cart"
                    onClick={() => dispatch(addProductToCart(getCartValues))}
                    className="SingleProduct_cart"
                >
                    <Cart />
                </button>
            </div>
            {!previewMore && (
                <Link className="SingleProduct_details" to={`/product/${productID}`}>
                    <div className="SingleProduct_name">{productName}</div>
                    <div className="SingleProduct_type">{type}</div>
                    <div className="SingleProduct_price">
                        {formatToCurrency(currentCurrency.currency, price)}{" "}
                        {discountedPrice ? <s>{formatToCurrency(currentCurrency.currency, discountedPrice)}</s> : null}
                    </div>
                </Link>
            )}
            {previewMore && (
                <Link className="SingleProduct_details" to={`/product/${productID}`}>
                    <div className="imagePreviews">
                        {imagePreviews.slice(0, 3).map((img, i) => (
                            <div key={i} className="imagePreview" onMouseEnter={() => setMainPreviewImage(img)}>
                                <img src={img} />
                            </div>
                        ))}
                        {imagePreviews.length > 3 && imagePreviews.length - 3 ? <span>+{imagePreviews.length - 3}</span> : null}
                    </div>
                    <div className="SingleProduct_price" style={{ marginTop: "10px" }}>
                        {formatToCurrency(currentCurrency.currency, price)}
                        {discountedPrice ? <s>{formatToCurrency(currentCurrency.currency, discountedPrice)}</s> : null}
                    </div>
                </Link>
            )}
        </div>
    );
};

export default SingleProduct;
