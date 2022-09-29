import Header from "./components/header/Header";
import ProductPage from "./components/productPage/ProductPage";
import CartPage from "./components/cartPage/CartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPages from "./components/categoryPages/CategoryPages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <CategoryPages />,
            },
            {
                path: "/men",
                element: <CategoryPages />,
            },
            {
                path: "/kids",
                element: <CategoryPages />,
            },
            {
                path: "/product/:id",
                element: <ProductPage />,
            },
            {
                path: "/cart",
                element: <CartPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
