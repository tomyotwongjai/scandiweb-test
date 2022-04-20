import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProduct.scss';
import { useState } from 'react';
// import { inputs } from './libs/data';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddProduct = () => {
  const [select, setSelect] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    InitialValues: {
      sku: '',
      name: '',
      price: '',
      size: '',
      weight: '',
      height: '',
      width: '',
      length: '',
    },
    ValidationSchema: Yup.object({
      sku: Yup.string()
        .max(5, 'Must be 9 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <main>
      <header className='main__header'>
        <h1>Add Product</h1>
        <div className='header__button'>
          <button
            type='submit'
            onClick={formik.handleSubmit}
            className='button__save'
          >
            Save
          </button>
          <button
            className='button__cancel'
            onClick={() => {
              navigate('/');
            }}
          >
            Cancel
          </button>
        </div>
      </header>

      <form
        id='product_form'
        autoComplete='off'
        className='product__form'
        onSubmit={formik.handleSubmit}
      >
        <div className='product__selection'>
          <div className='selection__container'>
            <div className='inner__selection'>
              <span>SKU</span>
              <div className='inner__in-selection'>
                <input
                  id='sku'
                  name='sku'
                  type='text'
                  onChange={formik.handleChange}
                  value={formik.values.sku}
                />
                <span className='error'>{formik.errors.sku}</span>
              </div>
              <span>Name</span>
              <div className='inner__in-selection'>
                <input
                  id='name'
                  type='text'
                  name='name'
                  aria-invalid='true'
                  className='error'
                />
                <label htmlFor='name' id='name-error' className='error'></label>
              </div>
              <span>Price ($)</span>
              <div className='inner__in-selection'>
                <input id='price' type='number' />
              </div>
            </div>
            <div className='inner__selection'>
              <span> Type Switcher</span>

              <div className='inner__in-selection'>
                <select id='productType' value={select} onChange={handleChange}>
                  <option
                    label='Please Select'
                    style={{ display: 'none' }}
                  ></option>
                  <option value='1'>DVD</option>
                  <option value='2'>Furniture</option>
                  <option value='3'>Book</option>
                </select>
              </div>
            </div>
          </div>
          <div className='selection__container'></div>

          {select === '1' && (
            <div id=' dvd' className='selection__container'>
              <div className='inner__selection'>
                <span> Size (MB)</span>
                <div className='inner__in-selection'>
                  <input id='size' type='text' name='size' required />
                </div>
                <p>Please provide product size.</p>
              </div>
            </div>
          )}
          {select === '2' && (
            <div id='furniture' className='selection__container'>
              <div className='inner__selection'>
                <span>Height (CM)</span>
                <div className='inner__in-selection'>
                  <input id='weigth' type='text' name='weight' required />
                </div>
                <span>Width (CM)</span>
                <div className='inner__in-selection'>
                  <input id='weigth' type='text' name='weight' required />
                </div>
                <span>Length (CM)</span>
                <div className='inner__in-selection'>
                  <input id='weigth' type='text' name='weight' required />
                </div>
                <p>Please provide product Dimension</p>
              </div>
            </div>
          )}
          {select === '3' && (
            <div id='dvd' className='selection__container'>
              <div className='inner__selection'>
                <span>Weight (KG)</span>

                <div className='inner__in-selection'>
                  <input id='weigth' type='text' name='weight' required />
                </div>
                <p>Please provide product Weight.</p>
              </div>
            </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default AddProduct;

// {
//   inputs.map((input) => {
//     <div className='form__group' key={input.id}>
//       <label htmlFor={input.id}>{input.name}</label>
//       <input
//         id={input.id}
//         name={input.name}
//         type={input.type}
//         pattern={input.patern}
//         maxLength={input.maxlength}
//         required={input.required}
//         onChange={(e) => {
//           setValues({
//             ...values,
//             [e.target.name]: e.target.value,
//           });
//         }}
//       />
//       <div className='form__error'>
//         {values.message.required && values.message.required}
//         {values.message.pattern && values.message.pattern}
//         {values.message.maxlength && values.message.maxlength}
//       </div>
//     </div>;
//   });
// }
