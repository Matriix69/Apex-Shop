import CategoryName from "../cateogryName/CategoryName";
import SingleProduct from "../SingleProduct.tsx/SingleProduct";
import { useAppSelector } from "../../app/hook";
import { products } from "../../utiles/types";

const CategoryPages = () => {
    const products = useAppSelector((state) => state.shop.mockProducts);

    return (
        <>
            <CategoryName />

            <div className="product_page">
                {products.map((product: products) => (
                    <SingleProduct key={product.productID} product={product} />
                ))}
            </div>
        </>
    );
};

export default CategoryPages;
