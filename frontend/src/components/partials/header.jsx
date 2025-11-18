
let isAdmin = true;
let isLogged = false;
let userLogged = {
  profile: "user1.jpg",
  name: "Juan Perez",
};
let toggleCart = () => {
  return null;
};

export const Header = () => {
  return (
    <header>
      <a href="/">
        <img src="src/assets/logo.png" alt="logo-dreamie" />
      </a>
      <nav>
        <ul>
          {isAdmin ? <li>💖</li> : null}

          <li>
            <a href="/">Inicio</a>
          </li>
          <li className="dropdown">
            <a href="/products">Productos </a>
            <ul className="submenu">
              <li>
                <a href="/products">Ropa</a>
              </li>
              <li>
                <a href="/products">Accesorios</a>
              </li>
              <li>
                <a href="/products">Stickers</a>
              </li>
            </ul>
          </li>

          {isLogged ? (
            <>
              <li className="nav__item">
                <a
                  href="/users/profile"
                  className="nav__link"
                  aria-label="Perfil de usuario"
                >
                  <img
                    src={`/media/users/${userLogged.profile}`}
                    alt={`foto de perfil de ${userLogged.name}`}
                    id="avatarHeader"
                  />
                </a>
              </li>

              <li className="nav__item">
                <form
                  action="/users/logout"
                  method="post"
                  style={{display: "inline"}}
                >
                  <button
                    type="submit"
                    className="nav__link"
                    aria-label="Cerrar sesión"
                  >
                    <i className="fas fa-sign-out-alt"></i>
                  </button>
                </form>
              </li>
            </>
          ) : (
            <li className="nav__item">
              <a
                href="/users/login"
                className="nav__link"
                aria-label="Iniciar sesión"
              >
                <i className="fas fa-user"></i>
              </a>
            </li>
          )}

          <li className="nav__item">
            <a onClick={toggleCart}>
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
