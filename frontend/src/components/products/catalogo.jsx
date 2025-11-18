import { Header } from "../partials/header";
import { Footer } from "../partials/footer";
import { Carrito } from "../partials/carrito";

export const Catalogo = ({ products }) => {
  return (
    <>
      <Header />
      <main>
        <h1>Todos los productos</h1>

        <a href="products/create/" class="center">
          <button class="btn">Crear producto</button>
        </a>

        <div class="productos-container">
          {products.map((product) => (
            <div class="producto">
              <div class="btn-producto">
                <a href={`/products/edit/${product.id}`}>
                  <button class="btn btn-product">Modificar</button>
                </a>

                <form
                  action={`products/delete/${product.id}`}
                  method="POST"
                  style={{ display: "inline" }}
                >
                  <button class="btn btn-product" type="submit">
                    Eliminar
                  </button>
                </form>
              </div>

              <a href={`/products/detail/${product.id}`}>
                <img
                  src={`/media/productos/${
                    product.image ? product.image : "default.jpg"
                  }`}
                  alt={product.name}
                />
              </a>

              <h3>{product.name}</h3>
              <div class="precio">${product.price}</div>
              <button class="btn">Añadir al carrito</button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <Carrito />
    </>
  );
};
