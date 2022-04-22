import { validateYupSchema } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../Hooks/useForm";
import "./AddProduct.scss";

const AddProduct = () => {
  const [select, setSelect] = useState("");
  const navigate = useNavigate();

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const formSubmit = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", formValues);

    navigate("/");
  };

  // custom hook to handle form input
  const { handleChange, formValues, errors, errorMessage, handleSubmit } =
    useForm(formSubmit);

  console.log("Form Values ", errors);

  console.log("Form Values ", errorMessage);

  return (
    <main>
      <header className="main__header">
        <h1>Add Product</h1>
        <div className="header__button">
          <button type="submit" className="button__save" onClick={handleSubmit}>
            Save
          </button>

          <button
            className="button__cancel"
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
        </div>
      </header>

      <form id="product_form" autoComplete="off" className="product__form">
        <div className="product__selection">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="selection__container">
            <div className="inner__selection">
              <span>SKU</span>
              <div className="inner__in-selection">
                <input
                  id="sku"
                  name="sku"
                  type="text"
                  onChange={handleChange}
                  maxLength="10"
                />
                {errors.sku && <span className="error">{errors.sku}</span>}
              </div>
              <span>Name</span>
              <div className="inner__in-selection">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  maxLength="10"
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <span>Price ($)</span>
              <div className="inner__in-selection">
                <input
                  id="price"
                  type="value"
                  name="price"
                  onChange={handleChange}
                  maxLength="10"
                />
                {errors.price && <span className="error">{errors.price}</span>}
              </div>
            </div>
            <div className="inner__selection">
              <span> Type Switcher</span>

              <div className="inner__in-selection">
                <select id="productType" onChange={handleSelect}>
                  <option
                    label="Please Select"
                    style={{ display: "none" }}
                  ></option>
                  <option value="1">DVD</option>
                  <option value="2">Furniture</option>
                  <option value="3">Book</option>
                </select>
              </div>
            </div>
          </div>

          {select === "1" && (
            <div id=" dvd" className="selection__container">
              <div className="inner__selection">
                <span> Size (MB)</span>
                <div className="inner__in-selection">
                  <input
                    id="size"
                    type="value"
                    name="size"
                    onChange={handleChange}
                    maxLength="5"
                    required
                  />
                  {errors.size && <span className="error">{errors.size}</span>}
                </div>
                <p>Please provide product size.</p>
              </div>
            </div>
          )}
          {select === "2" && (
            <div id="furniture" className="selection__container">
              <div className="inner__selection">
                <span>Height (CM)</span>
                <div className="inner__in-selection">
                  <input
                    id="height"
                    type="value"
                    name="height"
                    onChange={handleChange}
                    maxLength="3"
                    required
                  />
                  {errors.height && (
                    <span className="error">{errors.height}</span>
                  )}
                </div>
                <span>Width (CM)</span>
                <div className="inner__in-selection">
                  <input
                    id="width"
                    type="value"
                    name="width"
                    onChange={handleChange}
                    maxLength="3"
                    required
                  />
                  {errors.width && (
                    <span className="error">{errors.width}</span>
                  )}
                </div>
                <span>Length (CM)</span>
                <div className="inner__in-selection">
                  <input
                    id="length"
                    type="value"
                    name="length"
                    onChange={handleChange}
                    maxLength="3"
                    required
                  />
                  {errors.length && (
                    <span className="error">{errors.length}</span>
                  )}
                </div>
                <p>Please provide product Dimension</p>
              </div>
            </div>
          )}
          {select === "3" && (
            <div id="dvd" className="selection__container">
              <div className="inner__selection">
                <span>Weight (KG)</span>

                <div className="inner__in-selection">
                  <input
                    id="weigth"
                    type="value"
                    name="weight"
                    onChange={handleChange}
                    maxLength="3"
                    required
                  />
                  {errors.weight && (
                    <span className="error">{errors.weight}</span>
                  )}
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
