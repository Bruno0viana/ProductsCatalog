import { useNavigate } from 'react-router-dom';

export default function CartProduct({ product }) {

    const navigate = useNavigate();

    function GoToProductDetails() {
        navigate(`/${product.id}`);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="h5 my-3">{product.title}</h3>
                    <h4 className="h1">R$ {product.price}</h4>
                    <img
                        src={product.image}
                        alt={product.description}
                        width="100%"
                    />
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" type="button">Comprar</button>
                        <button
                            className="btn btn-light"
                            type="button"
                            onClick={() => { GoToProductDetails() }}
                        >
                            Saiba mais
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}