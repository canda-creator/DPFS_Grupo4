import { Header } from "../partials/header";
import { Footer } from "../partials/footer";
import { Carrito } from "../partials/carrito";

export const Create = () => {
  return (
    <>
      <Header />

      <main>
        <a href="https://www.glitter-graphics.com" class="glitter__fija">
          <img
            src="https://dl.glitter-graphics.net/pub/1304/1304631c5zp4bspmn.gif"
            width="53"
            height="148"
          />
        </a>

        <h1 class="titulo__register">Crear producto</h1>

        <form
          action="/products/create"
          method="POST"
          class="form-register"
          enctype="multipart/form-data"
        >
          <label for="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            required
          />

          <label for="description">Descripción</label>
          <textarea
            name="description"
            id="description"
            placeholder="Breve descripción del producto"
          ></textarea>

          <label for="image">Nombre de la imagen (ej: producto.jpg)</label>
          <input
            type="file"
            id="image"
            name="image"
            placeholder="producto.jpg"
          />

          <label for="category">Categoría:</label>
          <select id="category" name="category">
            {categories.map((category) => (
              <option value={category.id}>{category.name}</option>
            ))}
          </select>

          <label for="colors">Color:</label>
          <select id="colors" name="colors">
            {colors.map((color) => (
              <option value={color.id}>{color.name}</option>
            ))}
          </select>

          <label for="price">Precio:</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            value="0.00"
          />

          <button type="submit">Agregar</button>
        </form>

        <div class="login-register-link">
          <span>¿Querés editar un producto?</span>
          <a href="/products">Volver al catálogo</a>
        </div>
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
