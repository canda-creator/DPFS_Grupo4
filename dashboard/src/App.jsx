import { useEffect, useState } from "react";
import Header from "./components/header";
import Inicio from "./pages/inicio";
import Users from "./pages/users";
import Products from "./pages/products";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Header />
      <Inicio products={products} users={users} />
      <Users users={users} />
      <Products products={products} />
    </>
  );
}

export default App;
