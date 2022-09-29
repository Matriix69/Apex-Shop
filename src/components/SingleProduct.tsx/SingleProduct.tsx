import "./singleProuct.scss";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { Cart as CartType, products } from "../../utiles/types";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { formatToCurrency } from "../../utiles/utiles";
import { addProductToCart } from "../../features/productSlice";

const SingleProduct = ({ product }: { product: products }) => {
    const dispatch = useAppDispatch();

    const { productName, type, price, image, productID, sizes, colors } = product;
    const currentCurrency = useAppSelector((state) => state.shop.currency);

    const getCartValues: CartType = {
        productID: productID,
        selectedSize: sizes[0],
        selectedColor: colors[0].color,
        quantity: 1,
        price: price,
    };

    return (
        <div className="SingleProduct">
            <div className="SingleProduct_image">
                <Link to={`/product/${productID}`}>
                    <img src={image} />
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
            <Link to={`/product/${productID}`}>
                <div className="SingleProduct_name">
                    {productName} {type}
                </div>
                <div className="SingleProduct_price">{formatToCurrency(currentCurrency.currency, price)}</div>
            </Link>
        </div>
    );
};

export default SingleProduct;
