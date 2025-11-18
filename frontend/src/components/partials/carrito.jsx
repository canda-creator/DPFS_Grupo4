export const Carrito = () => {
  function toggleCart() {
    const cart = document.querySelector(".cart-sidebar");
    cart.style.display = cart.style.display === "none" ? "block" : "none";
  }

  let cart = [
    {
      name: "Producto de ejemplo",
      price: 15000,
      amount: 2,
    },
  ];

  return (
    <>
      <div className="cart-sidebar" style={{ display: "none" }}>
        <h2>Carrito de compras</h2>
        <button className="close-btn" onClick={toggleCart}>
          ×
        </button>
        
        {cart.forEach((product) => {
          // Item del carrito
          <div className="cart-item">
            <div className="item-info">
              <div className="item-title">{product.name}</div>
              <div className="item-price">${product.price}</div>
            </div>
            <div className="item-actions">
              <button className="delete-item">Borrar</button>
              <div className="cantidad-control">
                <button className="cantidad-btn">-</button>
                <span className="cantidad">{product.amount}</span>
                <button className="cantidad-btn">+</button>
              </div>
            </div>
          </div>;
        })}

        {/* Total y botón de compra */}
        <div className="cart-total">Total: $30.000</div>
        <button className="comprar-btn">Iniciar Compra</button>
      </div>
    </>
  );
};
