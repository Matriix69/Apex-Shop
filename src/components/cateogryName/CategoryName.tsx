import React from "react";
import { pathName } from "../../utiles/utiles";
import { useLocation } from "react-router-dom";

const CategoryName = () => {
    const { pathname } = useLocation();
    return <div className="category_name">{pathName[pathname]}</div>;
};

export default CategoryName;
