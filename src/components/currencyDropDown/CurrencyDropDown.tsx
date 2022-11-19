import { useAppDispatch } from "../../app/hook";
import { changeCurrency } from "../../features/productSlice";
import { currencies } from "../../utiles/utiles";
import "./currency.scss";

function CurrencyDropDown({ setSwitchCurrency }: { setSwitchCurrency: (value: boolean) => void }) {
    const dispatch = useAppDispatch();

    return (
        <div className="currency">
            {currencies.map(({ currency, symbol }) => (
                <button
                    key={currency}
                    title={currency}
                    aria-label={currency}
                    onClick={() => {
                        dispatch(changeCurrency({ currency, symbol }));
                        setSwitchCurrency(false);
                    }}
                >
                    {symbol} {currency}
                </button>
            ))}
        </div>
    );
}

export default CurrencyDropDown;
