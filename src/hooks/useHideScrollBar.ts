import { useEffect } from "react";

const useHideScrollBar = (hide: boolean) => {
    useEffect(() => {
        hide && (document.body.style.overflow = "hidden");
        !hide && (document.body.style.overflow = "unset");
    }, [hide]);
};

export default useHideScrollBar;
