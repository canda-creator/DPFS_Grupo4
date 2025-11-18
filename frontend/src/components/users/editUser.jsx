// import "./edit.css";

export const EditUser = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="titulo__register">Crear cuenta</h1>
        <form
          action="/users/processEdit"
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
            value={userLogged.name}
          />

          <label for="apellido">Apellido</label>
          <input
            type="text"
            name="lastname"
            id="apellido"
            placeholder="Apellido"
            value={userLogged.lastname}
            required
          />

          <label for="">Cambiar imagen de perfil</label>
          <input type="file" name="profile" />

          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            value={userLogged.email}
            required
          />

          <label for="password">Nueva contraseña (opcional)</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
          />

          <button type="submit">Actualizar</button>
        </form>
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
