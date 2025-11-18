import { Carrito } from "../partials/carrito";
import { Footer } from "../partials/footer";

export const Login = () => {
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
        <h1 class="titulo__register">Iniciar Sesión</h1>
        <form action="/users/login" class="form-register" method="post">
          {typeof error !== "undefined" && error && error.msg ? (
            <small className="error">{error.msg}</small>
          ) : null}

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

          <label for="rememberme">Recuerdame</label>
          <input type="checkbox" name="rememberme" id="rememberme" />

          <button type="submit">Iniciar Sesión</button>
        </form>
        <div class="login-register-link">
          <span>¿Todavía no tenés cuenta?</span>
          <a href="/users/register">Registrate</a>
        </div>
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
