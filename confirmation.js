const orderData = localStorage.getItem("orderSummary");

const summary = document.querySelector(".order-summary");

if (orderData) {
  const parsedData = JSON.parse(orderData);
  const products = parsedData.detailedCart;
  const totalPrice = parsedData.totalPrice;
  for (product of products) {
    summary.insertAdjacentHTML(
      "beforeend",
      `<p>${product.name} - ilość: ${product.amount}</p>`
    );
  }
} else {
  summary.insertAdjacentHTML(
    "beforeend",
    "<p>Brak informacji dotyczącej zamówienia</p>"
  );
}
