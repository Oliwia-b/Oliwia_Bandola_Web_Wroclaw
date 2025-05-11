import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Summary from "./components/Summary";
import Header from "./components/Header";
import allProducts from "./data/products.json";
import { useState } from "react";

function App() {
  const [cartProducts, setCartProducts] = useState<
    {
      id: number;
      amount: number;
    }[]
  >([]);

  // Create an object including all the info about the products in the cart
  const detailedCart = cartProducts
    .map((item) => {
      const product = allProducts.find((p) => p.id === item.id);
      if (!product) return null;

      const unitPrice =
        (product.price.main * 100 + product.price.fractional) / 100;

      return {
        id: item.id,
        name: product.name,
        amount: item.amount,
        unitPrice,
        subtotal: unitPrice * item.amount,
      };
    })
    .filter((item) => item !== null);

  // Calculate the total price of the order
  const totalPrice = Number(
    detailedCart.reduce((sum, item) => sum + item.subtotal, 0).toFixed(2)
  );

  // Delete prodct from the cart
  function handleDelete(productId: number) {
    setCartProducts((prev) => prev.filter((item) => item.id !== productId));
  }

  // Add product to the chart
  function handleAdd(productId: number) {
    const product = cartProducts.find((item) => item.id === productId);

    // Product already in the cart
    if (product) {
      setCartProducts((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, amount: item.amount + 1 } : item
        )
      );
      // Product not yet in the cart
    } else {
      setCartProducts((prev) => [...prev, { id: productId, amount: 1 }]);
    }
  }

  // Change the amount of product in the cart
  function updateCart(productId: number, amount: number) {
    setCartProducts((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, amount: amount } : item
      )
    );
  }

  // Saves ordered products in local storage and redirects to confirmation page
  function handlePurchase() {
    if (cartProducts.length !== 0) {
      setCartProducts([]);
      localStorage.setItem(
        "orderSummary",
        JSON.stringify({ detailedCart, totalPrice })
      );
      window.location.href = "confirmation.html";
    }
  }

  return (
    <>
      <Header></Header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={allProducts} addProduct={handleAdd} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={detailedCart}
                totalPrice={totalPrice}
                deleteProduct={handleDelete}
                updateAmount={updateCart}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <Summary
                cartProducts={detailedCart}
                totalPrice={totalPrice}
                handlePurchase={handlePurchase}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
