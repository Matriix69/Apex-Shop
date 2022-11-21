import { useAppSelector } from "../../app/hook";
import { Cart } from "../../utiles/types";
import { formatToCurrency, getCartTotoalPrice, getCartTotoalQuantity, getProductsInCart } from "../../utiles/utiles";
import SingleCartItem from "./SingleCartItem";
import { usePaystackPayment } from "react-paystack";
import { onClose, onSuccess, paystackConfig } from "../../utiles/paystack";
import DeleteModel from "./DeleteModel";
import { useState } from "react";
import useHideScrollBar from "../../hooks/useHideScrollBar";

function CartPage() {
    const cart = useAppSelector((state) => state.shop.cart);
    const currency = useAppSelector((state) => state.shop.currency);
    const products = useAppSelector((state) => state.shop.mockProducts);
    const getCartProducts = getProductsInCart(products, cart);

    const getCartToatal = getCartTotoalPrice(cart);
    const getCartQuantity = getCartTotoalQuantity(cart);

    const initializePayment = usePaystackPayment(paystackConfig(getCartToatal));

    const [deleteItem, setDelete] = useState(false);
    const [itemToBeDeleted, setItemToBeDeleted] = useState<number>(0);

    useHideScrollBar(deleteItem);

    return (
        <>
            <h1 className="cart_heading">Cart</h1>
            {cart.length ? (
                <>
                    {getCartProducts.map((product) => (
                        <SingleCartItem
                            key={product.productID}
                            product={product}
                            setDelete={setDelete}
                            setItemToBeDeleted={setItemToBeDeleted}
                        />
                    ))}

                    <div className="pricing">
                        <div className="pricing_list">
                            <div>Tax 21%: </div>
                            <span>{formatToCurrency(currency.currency, getCartToatal * 0.21)}</span>
                        </div>
                        <div className="pricing_list">
                            <div>Quantity: </div>
                            <span>{getCartQuantity}</span>
                        </div>
                        <div className="pricing_list">
                            <div>Total:</div>
                            <span>{formatToCurrency(currency.currency, getCartToatal)}</span>
                        </div>
                        <button
                            title="Order"
                            aria-label="Order"
                            onClick={() => initializePayment(onSuccess, onClose)}
                            className="pricing_action"
                        >
                            Order
                        </button>
                    </div>
                    {deleteItem && <DeleteModel setDelete={setDelete} itemToBeDeleted={itemToBeDeleted} />}
                </>
            ) : (
                <p>You have no item in cart, Add some product to cart and they will show up here</p>
            )}
        </>
    );
}

export default CartPage;
