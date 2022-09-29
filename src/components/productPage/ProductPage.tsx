import "./productpage.scss";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { useParams } from "react-router-dom";
import { Cart, products } from "../../utiles/types";
import { formatToCurrency } from "../../utiles/utiles";
import { useState } from "react";
import { addProductToCart } from "../../features/productSlice";

interface SelectedProperties {
    size: string;
    color: string;
}

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const currentCurrency = useAppSelector((state) => state.shop.currency);
    const products = useAppSelector((state) => state.shop.mockProducts);
    const getProduct: products = products.find((product: products) => product.productID === Number(id))!;
    const { imagePreviews, productName, image, price, type, sizes, colors, productID } = getProduct;

    const [selectedProperties, setSelectedProperties] = useState<SelectedProperties>({
        size: "",
        color: "",
    });
    const [preview, setPreview] = useState<string>("");

    function selectSize(size: string) {
        setSelectedProperties({
            ...selectedProperties,
            size,
        });
    }

    function selectColor(color: string) {
        setSelectedProperties({
            ...selectedProperties,
            color,
        });
    }

    const getCartValues: Cart = {
        productID: productID,
        selectedSize: selectedProperties.size || sizes[0],
        selectedColor: selectedProperties.color || colors[0].color,
        quantity: 1,
        price: price,
    };

    return (
        <div className="p">
            <div className="p_images">
                <div className="p_images_preview">
                    {imagePreviews.map((imagePreview, i) => (
                        <button key={i} onClick={() => setPreview(imagePreview)}>
                            <img src={imagePreview} />
                        </button>
                    ))}
                </div>
                <div className="p_images_main">
                    <img src={preview || image} />
                </div>
            </div>
            <div className="p_details">
                <h1 className="p_details_title">{productName}</h1>
                <div className="p_details_category">{type}</div>

                <div className="p_details_sizes">
                    <div className="p_details_sizes_title condensed_title">sizes:</div>
                    <div className="p_details_sizes_list">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                title="product size"
                                aria-label="product size"
                                className={size === selectedProperties.size ? "p_details_sizes_list_selected" : undefined}
                                onClick={() => selectSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p_details_colors">
                    <div className="p_details_colors_title condensed_title">Colors:</div>
                    <div className="p_details_colors_list">
                        {colors.map(({ code, color }) => (
                            <button
                                key={color}
                                title={color}
                                aria-label={color}
                                className={color === selectedProperties.color ? "p_details_colors_list_selected" : undefined}
                                onClick={() => selectColor(color)}
                            >
                                <span style={{ background: code }} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p_details_price">
                    <div className="condensed_title">price:</div>
                    <div>{formatToCurrency(currentCurrency.currency, price)}</div>
                </div>

                <button
                    title="Add to Cart"
                    aria-label="Add to cart"
                    className="p_details_action"
                    onClick={() => dispatch(addProductToCart(getCartValues))}
                >
                    ADD TO CART
                </button>

                <p className="p_details_description">
                    Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and
                    party dresses from all your favorite brands.
                </p>
            </div>
        </div>
    );
};

export default ProductPage;
