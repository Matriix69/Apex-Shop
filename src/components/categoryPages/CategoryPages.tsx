import CategoryName from "../cateogryName/CategoryName";
import SingleProduct from "../SingleProduct.tsx/SingleProduct";
import { useAppSelector } from "../../app/hook";
import { products } from "../../utiles/types";
import { fetchProductByCategory } from "../../utiles/utiles";

const CategoryPages = ({ category }: { category: string }) => {
    const Allproducts = useAppSelector((state) => state.shop.mockProducts);
    const products = fetchProductByCategory(Allproducts, category);

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
