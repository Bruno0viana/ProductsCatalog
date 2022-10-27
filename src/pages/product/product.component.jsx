import { useState, useEffect } from "react";

import "./product.component.scss";

import CartProduct from '../../components/cart-product.component';

import ProductService from '../../services/product.service';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        ProductService.GetMany()
            .then(response => setProducts(response))

    }, []);

    return (
        <>
            <section>

                <h2 className="h3 mb-3">Lista de produtos</h2>

                <div className="grid gap-3">
                    {products.map(currentProduct => <CartProduct key={currentProduct.id} product={currentProduct} />)}
                </div>
            </section>
        </>
    )
}