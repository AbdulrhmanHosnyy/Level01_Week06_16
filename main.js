async function getProductPrice(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product.price;
}

async function calculateTotalPrice() {
  const quantities = {
      1: 3,
      4: 4,
      3: 5
  };

  const prices = await Promise.all(
      Object.keys(quantities).map(id => getProductPrice(id))
  );

  const total = prices.reduce((sum, price, index) => {
      const productId = Object.keys(quantities)[index];
      const quantity = quantities[productId];
      return sum + (price * quantity);
  }, 0);

  console.log(`Total price: $${total.toFixed(2)}`);
}

calculateTotalPrice();
