export default function Products({ products }) {
  return (
    <main>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
        </div>
      ))}
    </main>
  );
}
