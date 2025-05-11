import { useNavigate } from "react-router-dom";
import OrderTable from "./OrderTable";

interface Props {
  cartProducts: {
    id: number;
    name: string;
    amount: number;
    unitPrice: number;
    subtotal: number;
  }[];
  totalPrice: number;
  handlePurchase: () => void;
}

export default function Summary({
  cartProducts,
  totalPrice,
  handlePurchase,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="summary">
      <h2>Podsumowanie Zamówienia</h2>
      <OrderTable
        editable={false}
        cartProducts={cartProducts}
        totalPrice={totalPrice}
      ></OrderTable>
      <div className="navigate-buttons">
        <button onClick={() => navigate("/cart")}>Powrót do koszyka</button>
        <button
          onClick={() => {
            navigate("/summary");
            handlePurchase();
          }}
        >
          Złóż zamówienie
        </button>
      </div>
    </div>
  );
}
