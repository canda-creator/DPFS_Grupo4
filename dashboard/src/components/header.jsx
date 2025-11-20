import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="d-flex justify-content-center gap-3">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/usuarios" className={({ isActive }) => isActive ? "active" : ""}>Usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={({ isActive }) => isActive ? "active" : ""}>Productos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
