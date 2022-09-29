import "./header.scss";
import { ReactComponent as BrandIcon } from "../../assets/brandIcon.svg";
import { ReactComponent as Arrow } from "../../assets/arrowDown.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import CartModal from "../cartModal/CartModal";
import CurrencyDropDown from "../currencyDropDown/CurrencyDropDown";
import { Outlet, Link, NavLink } from "react-router-dom";
import { routes } from "../../utiles/utiles";
import { useState } from "react";
import { useAppSelector } from "../../app/hook";

const Header = () => {
    const currentCurrency = useAppSelector((state) => state.shop.currency);
    const cart = useAppSelector((state) => state.shop.cart);

    const [switchCurrency, setSwitchCurrency] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    return (
        <>
            <header className="header">
                <nav className="header_nav" style={menuToggle ? { display: "flex" } : {}}>
                    {routes.map((route) => (
                        <NavLink
                            to={route.path}
                            key={route.title}
                            className={({ isActive }) => (isActive ? "active_tab" : undefined)}
                            onClick={() => {
                                if (menuToggle) setMenuToggle(false);
                            }}
                            end
                        >
                            {route.title}
                        </NavLink>
                    ))}
                </nav>

                <button
                    className="burger"
                    aria-label="burger - menu button"
                    onClick={() => {
                        setMenuToggle(!menuToggle);
                    }}
                >
                    <div className="burger_toggle"></div>
                </button>

                <Link to="/" className="header_brand">
                    <BrandIcon />
                </Link>

                <div className="header_actions">
                    <div className="header_actions_currency">
                        <button
                            className="header_actions_currency_btn"
                            title="Currency"
                            aria-label="Currency"
                            onClick={() => setSwitchCurrency(!switchCurrency)}
                        >
                            <span>{currentCurrency.symbol}</span>
                            <Arrow />
                        </button>
                        {switchCurrency && <CurrencyDropDown />}
                    </div>

                    <div className="header_actions_cart">
                        <button
                            className="header_actions_cart_btn"
                            title="Cart"
                            aria-label="Cart"
                            onClick={() => setShowCart(!showCart)}
                        >
                            <Cart />
                            {cart.length ? <div className="header_actions_cart_count">{cart.length}</div> : null}
                        </button>
                        {showCart && <CartModal closeCart={setShowCart} />}
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
