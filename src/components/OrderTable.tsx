interface Props {
  cartProducts: {
    id: number;
    name: string;
    amount: number;
    unitPrice: number;
    subtotal: number;
  }[];
  totalPrice: number;
  deleteProduct?: (id: number) => void;
  updateAmount?: (id: number, amount: number) => void;
  editable?: boolean;
}

export default function OrderTable({
  cartProducts,
  totalPrice,
  deleteProduct,
  updateAmount,
  editable,
}: Props) {
  return (
    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Ilość</th>
            <th>Cena</th>
            {editable ? (
              <th>Usuń</th>
            ) : (
              <th>
                Cena za<br></br>sztukę
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                {editable ? (
                  <td>
                    <input
                      type="number"
                      min={1}
                      value={item.amount}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        if (value >= 1) {
                          updateAmount?.(item.id, value);
                        }
                      }}
                    />
                  </td>
                ) : (
                  <td>{item.amount}</td>
                )}

                <td>{item.subtotal} zł</td>
                <td>
                  {editable ? (
                    <button
                      className="delete-button"
                      onClick={() => deleteProduct?.(item.id)}
                    >
                      x
                    </button>
                  ) : (
                    `${item.unitPrice} zł`
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>Suma: {totalPrice} zł</p>
    </div>
  );
}
