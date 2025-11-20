import { useEffect, useState } from "react";
import "./products.css";

export default function Products({ products }) {
  const urlBase = "http://localhost:3000/";
  const urlBaseProducts = urlBase + "media/productos/";
  const [colors, setColors] = useState([]);
  const [categories, setCategories] = useState([]);

  const productColor = (product) => {
    return colors.find((c) => c.id === product.color_id)?.code || "#FFFFFF";
  };

  const productColorStyle = (product) => {
    return {
      backgroundColor: productColor(product),
      borderRadius: "50px",
      width: "10px",
      height: "10px",
      display: "inline-block",
    };
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/colors")
      .then((res) => res.json())
      .then((data) => {
        setColors(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      });
  }, []);

  return (
    <main className="products-container">
      <div className="products-header">
        <h1>Gestión de Productos</h1>
        <p className="products-total">Total: {products.length} productos</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                className="product-image"
                src={urlBaseProducts + product.image}
                alt={product.name}
              />
            </div>

            <div className="product-content">
              <h2 className="product-name">{product.name}</h2>

              {product.description && (
                <p className="product-description">
                  {product.description.length > 50
                    ? product.description.substring(0, 50) + "..."
                    : product.description}
                </p>
              )}

              <div className="product-details">
                <div className="product-price">${product.price}</div>

                <div className="product-meta">
                  <div className="product-meta-item">
                    <span className="meta-label">Categoría:</span>
                    <span className="meta-value">
                      {categories.find((cat) => cat.id === product.category_id)
                        ?.name || "—"}
                    </span>
                  </div>

                  {product.color_id && (
                    <div className="product-meta-item">
                      <span className="meta-label">Color:</span>
                      <span
                        style={productColorStyle(product)}
                        title={
                          colors.find((c) => c.id === product.color_id)?.name ||
                          "Color"
                        }
                      ></span>
                    </div>
                  )}

                  {product.createdAt && (
                    <div className="product-meta-item">
                      <span className="meta-label">Agregado:</span>
                      <span className="meta-value">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="product-id">
                <small>ID: {product.id}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="no-products">
          <p>No hay productos registrados</p>
        </div>
      )}
    </main>
  );
}
