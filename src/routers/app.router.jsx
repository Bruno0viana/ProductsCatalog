
import { createBrowserRouter } from "react-router-dom";

import App from '../App';
import Product from '../pages/product/product.component';
import ProductDetails from '../pages/product/product-details.component';
import Card from '../pages/card/card.component';
import NotFound from '../pages/not-found/not-found.component';

const RouterDefault = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        element: <App />,
        children: [
            {
                path: '',
                element: <Product />
            },
            {
                path: ':idProduct',
                element: <ProductDetails />
            },
            {
                path: 'carrinho',
                element: <Card />
            }
        ]
    },

]);

export default RouterDefault;