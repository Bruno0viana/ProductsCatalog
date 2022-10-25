
const ProductService = {

    GetMany: async function () {

        try {
            const request = await fetch('https://fakestoreapi.com/products');
            const products = await request.json();

            return products;
        }
        catch {
            return { message: 'Nao foi possivel finalizar a operacao' }
        }
    },

    GetById: async function (idProduct) {

        try {
            const request = await fetch(`https://fakestoreapi.com/products/${idProduct}`);
            const currentProduct = await request.json();

            return currentProduct;
        }
        catch {
            return { message: 'Nao foi possivel finalizar a operacao' }
        }

    },

    GetByCategory: async function (categoryName) {
        try {
            const request = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
            const productsFound = await request.json();

            return productsFound;
        }
        catch {
            return { message: 'Nao foi possivel finalizar a operacao' }
        }
    }

}

export default ProductService;