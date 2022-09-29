import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { products } from "../../utiles/types";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { formatToCurrency } from "../../utiles/utiles";
import { incrementCartQuantity, decrementCartQuantity, updateCartSize, updateCartColor } from "../../features/productSlice";

const SingleCartModalItem = ({ product }: { product: products }) => {
    const { productName, image, price, type, sizes, colors, productID } = product;

    const cart = useAppSelector((state) => state.shop.cart);
    const currentCurrency = useAppSelector((state) => state.shop.currency);
    const CartValueForProduct = cart.find((cart) => cart.productID === productID);

    const dispatch = useAppDispatch();

    return (
        <div className="m">
            <div className="m_details">
                <h1 className="m_details_title">{productName}</h1>
                <div className="m_details_category">{type}</div>

                <div className="m_details_price">{formatToCurrency(currentCurrency.currency, price)}</div>

                <div className="m_details_sizes">
                    <div className="m_details_sizes_title ">sizes:</div>
                    <div className="m_details_sizes_list">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                title="product size"
                                aria-label="product size"
                                className={
                                    size === CartValueForProduct?.selectedSize ? "p_details_sizes_list_selected" : undefined
                                }
                                onClick={() => dispatch(updateCartSize({ productID, size }))}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="m_details_colors">
                    <div className="m_details_colors_title ">Colors:</div>
                    <div className="m_details_colors_list">
                        {colors.map(({ code, color }) => (
                            <button
                                key={color}
                                title={color}
                                aria-label={color}
                                className={
                                    color === CartValueForProduct?.selectedColor ? "p_details_colors_list_selected" : undefined
                                }
                                onClick={() => dispatch(updateCartColor({ productID, color }))}
                            >
                                <span style={{ background: code }} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="m_image">
                <div className="m_image_count">
                    <button
                        title="Add quntity"
                        aria-label="Add quntity"
                        onClick={() => dispatch(incrementCartQuantity(productID))}
                    >
                        <Plus />
                    </button>
                    <div>{CartValueForProduct?.quantity}</div>
                    <button
                        title="minus quntity"
                        aria-label="minus quntity"
                        onClick={() => dispatch(decrementCartQuantity(productID))}
                    >
                        <Minus />
                    </button>
                </div>

                <div className="m_image_preview">
                    <img src={image} />
                </div>
            </div>
        </div>
    );
};

export default SingleCartModalItem;
