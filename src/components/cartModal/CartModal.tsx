import SingleCartModalItem from "./SingleCartModalItem";
import "./cartModal.scss";
import { useAppSelector } from "../../app/hook";
import { Link } from "react-router-dom";
import { Cart } from "../../utiles/types";
import { formatToCurrency, getCartTotoalPrice, getProductsInCart } from "../../utiles/utiles";
import { usePaystackPayment } from "react-paystack";
import { onClose, onSuccess, paystackConfig } from "../../utiles/paystack";

const CartModal = ({ closeCart }: { closeCart: (value: boolean) => void }) => {
    const cart = useAppSelector((state) => state.shop.cart);
    const currency = useAppSelector((state) => state.shop.currency);
    const products = useAppSelector((state) => state.shop.mockProducts);
    const getCartProducts = getProductsInCart(products, cart);

    const getCartTotal = getCartTotoalPrice(cart);

    const initializePayment = usePaystackPayment(paystackConfig(getCartTotal));

    return (
        <>
            <div className="c_modal_overlay" onClick={() => closeCart(false)} />
            <div className="c_modal">
                {cart.length ? (
                    <>
                        <h2>
                            <span>My Bag,</span> {cart.length} item(s)
                        </h2>

                        {getCartProducts?.map((product) => (
                            <SingleCartModalItem key={product.productID} product={product} />
                        ))}

                        <div className="m_price">
                            <div>Total</div>
                            <div>{formatToCurrency(currency.currency, getCartTotal)}</div>
                        </div>

                        <div className="m_actions">
                            <Link
                                to="/cart"
                                title="Go to cart"
                                aria-label="Go to cart"
                                className="m_actions_bag"
                                onClick={() => closeCart(false)}
                            >
                                view Bag
                            </Link>
                            <button
                                title="Check Out"
                                aria-label="Check out"
                                onClick={() => initializePayment(onSuccess, onClose)}
                                className="m_actions_check"
                            >
                                CHECK OUT
                            </button>
                        </div>
                    </>
                ) : (
                    <div>You have no item in the bag</div>
                )}
            </div>
        </>
    );
};

export default CartModal;
