import './App.scss';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className='App'>
        <header className='app__header'>
          <h1>My Product List</h1>
          <div className='button__container'>
            <button
              className='button__add'
              onClick={() => {
                navigate('/Product-Add');
              }}
            >
              Add Product
            </button>

            <button className='button__delete' id='delete-product-btn'>
              Delete Product
            </button>
          </div>
        </header>
        <section className='product__section'>
          <div className='product__container'>
            <div className='product__details'>
              <input type='checkbox' className='delete-checkbox' />
              <p>#12345678</p>
              <p>Acme DISC</p>
              <p>$100</p>
              <p>Size: 700MB</p>
            </div>
          </div>
          <div className='product__container'>
            <input type='checkbox' className='delete-checkbox' />
            <div className='product__details'>
              <p>#12345678</p>
              <p>Acme DISC</p>
              <p>$100</p>
              <p>Size: 700MB</p>
            </div>
          </div>
          <div className='product__container'>
            <input type='checkbox' className='delete-checkbox' />
            <div className='product__details'>
              <p>#12345678</p>
              <p>Acme DISC</p>
              <p>$100</p>
              <p>Size: 700MB</p>
            </div>
          </div>
          <div className='product__container'>
            <input type='checkbox' className='delete-checkbox' />
            <div className='product__details'>
              <p>#12345678</p>
              <p>Acme DISC</p>
              <p>$100</p>
              <p>Size: 700MB</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
