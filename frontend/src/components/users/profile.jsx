//import "./profile.css";

import { Header } from "../partials/header";

export const Profile = () => {
  return (
    <>
      <Header />
      <main>
        <button>
          <a href="/users/edit">Editar perfil</a>
        </button>
        <h1>Perfil de {userLogged.name}</h1>
        <img
          src={`/media/users/${userLogged.profile}`}
          alt={`foto de perfil de ${userLogged.name}`}
        />
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
