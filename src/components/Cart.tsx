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
  deleteProduct: (id: number) => void;
  updateAmount: (id: number, amount: number) => void;
}

export default function Cart({
  cartProducts,
  totalPrice,
  deleteProduct,
  updateAmount,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <h2>Zawartość Twojego Koszyka</h2>
      <OrderTable
        editable={true}
        cartProducts={cartProducts}
        totalPrice={totalPrice}
        deleteProduct={deleteProduct}
        updateAmount={updateAmount}
      ></OrderTable>
      <div className="navigate-buttons">
        <button onClick={() => navigate("/")}>Powrót</button>
        <button onClick={() => navigate("/summary")}>Podsumowanie</button>
      </div>
    </div>
  );
}
