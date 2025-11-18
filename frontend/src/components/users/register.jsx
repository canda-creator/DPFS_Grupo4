import { Carrito } from "../partials/carrito";
import { Footer } from "../partials/footer";
import { Header } from "../partials/header";
import "./register.css";

export const Register = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="titulo__register">Crear cuenta</h1>
        <form
          action="/users/register"
          className="form-register"
          method="post"
          enctype="multipart/form-data"
        >
          <label for="nombre">Nombre</label>
          <input
            type="text"
            name="name"
            id="nombre"
            placeholder="Nombre"
            required
          />

          <label for="apellido">Apellido</label>
          <input
            type="text"
            name="lastname"
            id="apellido"
            placeholder="Apellido"
            required
          />

          <label for="">Agregá una imagen</label>
          <input type="file" required name="profile" />

          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            required
          />

          <label for="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            required
          />

          <label for="confirmar-password">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmar-password"
            placeholder="Confirmar contraseña"
            required
          />

          <button type="submit">Registrarse</button>
        </form>
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
