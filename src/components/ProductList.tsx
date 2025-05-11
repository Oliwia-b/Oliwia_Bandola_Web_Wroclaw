import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
}

interface Props {
  products: Product[];
  addProduct: (id: number) => void;
}

export default function ProductList({ products, addProduct }: Props) {
  const navigate = useNavigate();

  return (
    <div className="list-group">
      <h2>Wszystkie Produkty</h2>

      <ul className="products-list">
        {products.length === 0 ? (
          <p>Brak produktów</p>
        ) : (
          products.map((product) => (
            <li key={product.id}>
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                {product.price.main}.{product.price.fractional} zł
              </p>

              <button
                className="add-button"
                onClick={() => addProduct(product.id)}
              >
                Dodaj do koszyka
              </button>
            </li>
          ))
        )}
      </ul>

      <button onClick={() => navigate("cart")}>Koszyk</button>
    </div>
  );
}
