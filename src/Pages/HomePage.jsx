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
    axios.get("https://my-crud-1.herokuapp.com/backend/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  };

  // Delete product
  
  const deleteProductById = () => {
    products.forEach((p) => {
      if (p.select) {
        axios
          .delete(`https://my-crud-1.herokuapp.com/backend/products/${p.id}/delete`)
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
    {/* Header */}
    
      <main className="App">
        <header className="app__header">
          <h1>My Product List</h1>
          <div className="button__container">

          {/* Add product */}

            <input id="add-product-btn" 
            type="button" 
            className= 'btn__add'
           value="ADD"
             onClick={() => {
              navigate("/add-product");
            }}  />

            {/* Delete Product */}

          <input id="delete-product-btn"
               type="button"
            className= 'btn__delete'
            name="button"
            value="MASS DELETE" 
             onClick={() => {
                deleteProductById();
              }}></input>
          </div>
        </header>

        {/* Body */}

        <section className="product__section">
          {products.map((product, key) => (
            <div className="product__container">
              <input
                type="checkbox"
                className="delete-checkbox"
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
