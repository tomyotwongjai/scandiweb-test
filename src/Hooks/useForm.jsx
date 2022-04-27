import { useState } from "react";
import { omit } from "lodash";

const useForm = (callback) => {
  // Form values
  const [formValues, setFormValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // Errors
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      case "sku":
        if (!value) {
          setErrors({ ...errors, sku: "Please, submit required data" });
        } else if (!new RegExp(/^[A-Za-z0-9]+$/).test(value)) {
          setErrors({
            ...errors,
            sku: "Please, provide the data of indicated type(no special characters)",
          });
        } else {
          let newObj = omit(errors, "sku");
          setErrors({ ...newObj });
        }
        break;
      case "name":
        if (!value) {
          setErrors({ ...errors, name: "Please, submit required data" });
        } else if (!new RegExp(/^[a-zA-Z]+$/).test(value)) {
          setErrors({
            ...errors,
            name: "Please, provide the data of indicated type(no special characters or numbers)",
          });
        } else {
          let newObj = omit(errors, "name");
          setErrors({ ...newObj });
        }
        break;
      case "price":
        if (!value) {
          setErrors({ ...errors, price: "Please, submit required data" });
        } else if (!new RegExp(/^[0-9.]+$/).test(value)) {
          setErrors({
            ...errors,
            price: "Please, provide the data of indicated type(numbers only)",
          });
        } else {
          let newObj = omit(errors, "price");
          setErrors({ ...newObj });
        }
        break;
      case "size":
        if (!value) {
          setErrors({ ...errors, size: "Please, submit required data" });
        } else if (!new RegExp(/^[0-9.]+$/).test(value)) {
          setErrors({
            ...errors,
            size: "Please, provide the data of indicated type(numbers only)",
          });
        } else {
          let newObj = omit(errors, "size");
          setErrors({ ...newObj });
        }
        break;
      case "height":
        if (!value) {
          setErrors({ ...errors, height: "Please, submit required data" });
        } else if (!new RegExp(/^[0-9.]+$/).test(value)) {
          setErrors({
            ...errors,
            height: "Please, provide the data of indicated type(numbers only)",
          });
        } else {
          let newObj = omit(errors, "height");
          setErrors({ ...newObj });
        }
        break;
      case "width":
        if (!value) {
          setErrors({ ...errors, width: "Please, submit required data" });
        } else if (!new RegExp(/^[0-9.]+$/).test(value)) {
          setErrors({
            ...errors,
            width: "Please, provide the data of indicated type(numbers only)",
          });
        } else {
          let newObj = omit(errors, "width");
          setErrors({ ...newObj });
        }
        break;
      case "length":
        if (!value) {
          setErrors({ ...errors, length: "Please, submit required data" });
        } else if (!new RegExp(/^[0-9.]+$/).test(value)) {
          setErrors({
            ...errors,
            length: "Please, provide the data of indicated type(numbers only)",
          });
        } else {
          let newObj = omit(errors, "length");
          setErrors({ ...newObj });
        }
        break;
      case "weight":
        if (!value) {
          setErrors({ ...errors, weight: "Please, submit required data" });
        } else if (!new RegExp(/^[0-9.]+$/).test(value)) {
          setErrors({
            ...errors,
            weight: "Please, provide the data of indicated type(numbers only)",
          });
        } else {
          let newObj = omit(errors, "weight");
          setErrors({ ...newObj });
        }
        break;

      default:
        break;
    }
  };

  // Handle Form Input
  const handleChange = (event) => {
    // clear any events that are not related to the input
    event.persist();

    // set values in state
    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val, errors);
    setFormValues({
      ...formValues,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      callback();
    } else {
      setErrorMessage("Please, submit required data");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return {
    formValues,
    errors,
    handleChange,
    handleSubmit,
    errorMessage,
  };
};

export default useForm;
