import "./inicio.css";

export default function Inicio({products, users}) {
  return (
    <main>
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
          </div>
        ))}
        {users.map((user, index) => (
          <div key={index}>
            <h2>{user.name}</h2>
          </div>
        ))}
    </main>
  );
}