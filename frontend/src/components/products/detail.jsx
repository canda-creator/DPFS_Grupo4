import { Header } from "../partials/header";
import { Footer } from "../partials/footer";
import { Carrito } from "../partials/carrito";

export const Detail = () => {
  return (
    <>
      <Header />
      <main className="product-detail">
        <div className="product-container">
          <div className="product-images">
            <img
              src={`../../media/productos/${product.image}`}
              alt="Nombre del producto"
            />
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">${product.price}</p>

            <div className="cantidad-selector">
              <button className="cantidad-btn">-</button>
              <span className="cantidad">0</span>
              <button className="cantidad-btn">+</button>
            </div>
            <form action="/cart/add" method="POST">
              <input type="hidden" name="productID" value={product.id} />
              <button className="add-to-cart">Agregar al carrito</button>
            </form>
            <div className="product-description">
              <p>
                <strong>Descripción:</strong> {product.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
