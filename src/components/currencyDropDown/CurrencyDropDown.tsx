import { useAppDispatch } from "../../app/hook";
import { changeCurrency } from "../../features/productSlice";
import { currencies } from "../../utiles/utiles";
import "./currency.scss";

function CurrencyDropDown() {
    const dispatch = useAppDispatch();

    return (
        <div className="currency">
            {currencies.map(({ currency, symbol }) => (
                <button
                    key={currency}
                    title={currency}
                    aria-label={currency}
                    onClick={() => dispatch(changeCurrency({ currency, symbol }))}
                >
                    {symbol} {currency}
                </button>
            ))}
        </div>
    );
}

export default CurrencyDropDown;
