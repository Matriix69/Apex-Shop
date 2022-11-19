import Header from "./components/header/Header";
import ProductPage from "./components/productPage/ProductPage";
import CartPage from "./components/cartPage/CartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPages from "./components/categoryPages/CategoryPages";
import ErrorPage from "./components/404page/404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <CategoryPages category="men" />,
            },
            {
                path: "/women",
                element: <CategoryPages category="women" />,
            },
            {
                path: "/kids",
                element: <CategoryPages category="kids" />,
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
