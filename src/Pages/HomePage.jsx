import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./homepage.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  // Retrieve products from the database

  const getProducts = () => {
    axios.get("http://localhost/backend/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  };

  // Delete roduct
  const deleteProductById = () => {
    products.forEach((p) => {
      if (p.select) {
        axios
          .delete(`http://localhost/backend/products${p.id}`)
          .then((res) => {
            console.log(res.data);
            getProducts();
          });
      } else {
        return null;
      }
      console.log(p.select);
    });
  };

  return (
    <>
      <main className="App">
        <header className="app__header">
          <h1>My Product List</h1>
          <div className="button__container">
            <button
              className="button__add"
              onClick={() => {
                navigate("/add-product");
              }}
            >
              Add
            </button>

            <button
              name="delete"
              className="button__delete"
              id="delete-product-btn"
              onClick={() => {
                deleteProductById();
              }}
            >
              Mass Delete
            </button>
          </div>
        </header>
        <section className="product__section">
          {products.map((product, key) => (
            <div className="product__container">
              <input
                type="checkbox"
                className=".delete-checkbox"
                onChange={(e) => {
                  product.select = e.target.checked;
                  setProducts(products);
                }}
              />
              <div className="product__details" key={key}>
                <p>{product.sku}</p>
                <p>{product.name}</p>
                <p>$ {product.price}</p>
                <p>{product.size && `Size: ${product.size} MB`}</p>
                <p>
                  {product.height &&
                    product.width &&
                    product.length &&
                    `Dimension: ${product.height}x${product.width}x${product.length}`}
                </p>
                <p>{product.weight && `Weight: ${product.weight} KG`}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default HomePage;
