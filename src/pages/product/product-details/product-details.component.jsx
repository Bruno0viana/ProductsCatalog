import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import ProductService from '../../../services/product.service';

import './product-details.component.scss';

export default function ProductDetails() {

    const { idProduct } = useParams();

    const [currentProduct, setCurrentProduct] = useState()

    useEffect(() => {

        ProductService.GetById(idProduct)
            .then(response => setCurrentProduct(response));
    }, []);

    return (
        <>
            <h1>{currentProduct?.title}</h1>
        </>
    )
}