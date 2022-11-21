import React from "react";
import { useAppDispatch } from "../../app/hook";
import { removeProductFromCart } from "../../features/productSlice";

const DeleteModel = ({ setDelete, itemToBeDeleted }: { setDelete: (value: boolean) => void; itemToBeDeleted: number }) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="c_modal_overlay" onClick={() => setDelete(false)} />
            <div className="delete_modal">
                <p>Are you sure you want to remove the selected item?</p>
                <div className="delete_modal_actions">
                    <button onClick={() => setDelete(false)}>Cancel</button>
                    <button
                        onClick={() => {
                            dispatch(removeProductFromCart(Number(itemToBeDeleted)));
                            setDelete(false);
                        }}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </>
    );
};

export default DeleteModel;
