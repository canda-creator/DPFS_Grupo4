import { NavLink } from "react-router-dom";
import "./inicio.css";

export default function Inicio({ products, users }) {
  const urlBase = "http://localhost:3000/";
  const urlBaseProducts = urlBase + "media/productos/";
  const urlBaseUsers = urlBase + "media/users/";

  const lastUser = users.length > 0 ? users[0] : null;
  const totalUsers = users.length;
  const totalProducts = products.length;
  const lastProduct =
    products.length > 0 ? products[products.length - 1] : null;

  return (
    <main className="inicio-container">
      <div className="cards-grid">
        {/* TOTAL DE USUARIOS */}
        <div className="card">
          <NavLink to="/usuarios">
            <h2>Total de usuarios</h2>
            <p className="card-number">{totalUsers}</p>
            <p className="card-subtitle">Usuarios registrados</p>
          </NavLink>
        </div>

        {/* TOTAL DE PRODUCTOS */}
        <div className="card">
          <NavLink to="/productos">
            <h2>Total de productos</h2>
            <p className="card-number">{totalProducts}</p>
            <p className="card-subtitle">Productos en stock</p>
          </NavLink>
        </div>

        {/* ÚLTIMO USUARIO */}
        <div className="card">
          <NavLink to="/usuarios">
            <h2>Último usuario creado</h2>
            {lastUser ? (
              <>
                <p className="card-text">{lastUser.rol}</p>
                <img
                  className="avatarLastUser"
                  src={urlBaseUsers + lastUser.profile}
                  alt="Avatar del último usuario"
                />
                <p className="card-name">
                  {lastUser.name + " " + lastUser.lastname}
                </p>
                <p className="card-date">
                  Creado: {new Date(lastUser.createdAt).toLocaleDateString()}
                </p>
              </>
            ) : (
              <p className="card-text">No hay usuarios</p>
            )}
          </NavLink>
        </div>

        {/* ÚLTIMO PRODUCTO */}
        <div className="card">
          <NavLink to="/productos">
            <h2>Último producto agregado</h2>
            {lastProduct ? (
              <>
                <p className="card-text">{lastProduct.name}</p>
                <img
                  className="productImg"
                  src={urlBaseProducts + lastProduct.image}
                  alt="Último producto"
                />
                <p className="card-price">${lastProduct.price}</p>
                <p className="card-date">
                  Agregado:{" "}
                  {new Date(lastProduct.createdAt).toLocaleDateString()}
                </p>
              </>
            ) : (
              <p className="card-text">No hay productos</p>
            )}
          </NavLink>
        </div>
      </div>
    </main>
  );
}