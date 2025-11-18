import { Header } from "./partials/header";
import { Footer } from "./partials/footer";
import { Carrito } from "./partials/carrito";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <img src="src/assets/gif-mymelody.gif" className="gif__mymelody" alt="" />
        <div className="texto">
          <h2 className="texto__titulo">El contraste que te representa 💕💟</h2>
          <p className="texto__subtitulo">
            Hecho a mano para soñadores, rebeldes y románticos.
          </p>
        </div>

        <section className="seccion-mensaje">
          <div className="info-mensaje">
            <h2 className="mensaje__descripcion">
              ¿Buscas el equilibrio perfecto entre dulzura y misterio?
            </h2>
            <p className="mensaje__descripcion">
              Nuestros accesorios están diseñados para quienes se expresan con
              estilo.
            </p>
            <p className="mensaje__descripcion">
              Adéntrate en un mundo de corazones pastel, detalles góticos y un
              encanto único.
            </p>
            <div className="mensaje__cta">
              <button
                className="mensaje__btn"
                aria-label="Conocer más sobre nuestros accesorios"
              >
                Conocé más
              </button>
            </div>
          </div>
        </section>

        <section className="seccion-info">
          <div className="info-imagen">
            <img src="src/assets/info-imagen.jpg" alt="Imagen descriptiva" />
          </div>
          <div className="info-texto">
            <h2>Conocé nuestro universo</h2>
            <p>
              Creamos accesorios únicos para personas que se animan a expresar
              su estilo sin miedo. Cada pieza combina dulzura y rebeldía, con un
              toque de fantasía que te hace brillar.
            </p>
          </div>
        </section>

        <section className="horarios-atencion">
          <div className="contenedor-imagen">
            <img src="src/assets/imagen-horarios.jpg" alt="Imagen horarios" />
          </div>
          <div className="contenedor-texto">
            <h3>Horarios de Atención</h3>
            <div className="horarios__texto">
              <p>Lunes a Viernes: 9:00 a 18:00</p>
              <p>Sábados: 10:00 a 14:00</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Carrito />
    </>
  );
};
