import { Header } from "../partials/header";
import { Footer } from "../partials/footer";
import { Carrito } from "../partials/carrito";

export const EditProduct = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="titulo__register">Editar producto</h1>

        <form
          action={`/products/edit/${product.id}`}
          method="POST"
          className="form-register"
          enctype="multipart/form-data"
        >
          <label for="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            required
          />

          <label for="description">Descripción</label>
          <textarea name="description" id="description">
            {product.description.trim()}
          </textarea>

          <label for="image">Imagen (nombre de archivo)</label>
          <input
            type="file"
            id="image"
            name="image"
            value={product.image}
          />

          <label for="category">Categoría:</label>
          <select id="category" name="category">
            {categories.map((category) => (
              <option
                value={category.id}
                selected={product.category_id === category.id}
              >
                {category.name}
              </option>
            ))}
          </select>

          <label for="colors">Color:</label>
          <select id="colors" name="colors">
            {colors.map((color) => (
              <option value={color.id} selected={product.color_id === color.id}>
                {color.name}
              </option>
            ))}
          </select>

          <label for="price">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            step="0.01"
          />

          <button type="submit">Guardar cambios</button>
        </form>
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
