import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateDashboardProduct } from "../redux/actions/actions/productsActions.jsx";
import updateProduct from "../api/updateProduct.jsx";
import { categories } from "../Components/data/categories.js";
import { useLocation } from "react-router-dom";
import "../assests/addProduct.css"; // Reusing the same CSS file
import { useTranslation } from "react-i18next";

const UpdateProductPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [product, setProduct] = useState(state.product);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      if (value) {
        delete updatedErrors[name];
      } else {
        updatedErrors[name] = `You should enter the ${name}`;
      }
      return updatedErrors;
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProduct((prev) => ({ ...prev, image: file }));
      setImagePreview(imageUrl);
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!product.title) formErrors.title = "You should enter the title";
    if (!product.category) formErrors.category = "You should select a category";
    if (!product.description)
      formErrors.description = "You should enter a description";
    if (!product.price) formErrors.price = "You should enter the price";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      const formData = new FormData();

      // Append all product fields to FormData
      formData.append("id", product.id);
      formData.append("title", product.title);
      formData.append("category", product.category);
      formData.append("description", product.description);
      formData.append("price", product.price);
      if (product.image instanceof File) {
        formData.append("image", product.image); // Append image if it's a File object
      }

      // Dispatch and post the updated product
      dispatch(updateDashboardProduct(product));
      await updateProduct(formData, product.id); // Assuming `updateProduct` is an async function
      navigate("/dashboard");

      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };
  const { t } = useTranslation();
  const handleBack = () => {
    navigate("/dashboard");
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px",
        rowGap: "30px",
      }}
    >
      <Button
        onClick={handleBack}
        style={{
          alignSelf: "flex-start",
          backgroundColor: "blue",
          marginLeft: "8px",
        }}
      >
        {t("buttons.backToDashboard")}
      </Button>
      <h1
        style={{
          textAlign: "center",
          color: "blue",
          fontWeight: "600",
          fontSize: "25px",
          alignSelf: "flex-start",
        }}
      >
        {t("buttons.updateProduct")}
      </h1>
      <Form
        className="form"
        onSubmit={handleSubmit} // Attach the onSubmit handler here
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* -------- product title --------- */}
        <Form.Group className="mb-3 group">
          <Form.Label className="label">{t("product.title")} : </Form.Label>
          <Form.Control
            className="control"
            placeholder="Enter Product Title"
            value={product.title}
            name="title"
            onChange={handleOnChange}
          />
          {errors.title && <p style={{ color: "red" }}>* {errors.title}</p>}
        </Form.Group>

        {/* -------- Product Category --------- */}
        <Form.Group className="mb-3 group">
          <Form.Label className="label">{t("product.category")}</Form.Label>
          <Form.Select
            className="control"
            value={product.category}
            name="category"
            onChange={handleOnChange}
          >
            <option value="">{t("product.selectCategory")}</option>
            {categories &&
              categories.map((c, i) => <option value={c}>{c}</option>)}
          </Form.Select>
          {errors.category && (
            <p style={{ color: "red", fontSize: "13px" }}>
              * {errors.category}
            </p>
          )}
        </Form.Group>

        {/* -------- product description --------- */}
        <Form.Group
          className="mb-3 group"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label className="label">{t("product.desc")} :</Form.Label>
          <Form.Control
            className="control"
            as="textarea"
            rows={3}
            value={product.description}
            name="description"
            onChange={handleOnChange}
          />
          {errors.description && (
            <p style={{ color: "red", fontSize: "13px" }}>
              * {errors.description}
            </p>
          )}
        </Form.Group>

        {/* -------- product price --------- */}
        <Form.Group
          className="mb-3 group"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="label">{t("product.price")} :</Form.Label>
          <Form.Control
            className="control"
            type="text"
            placeholder="Enter The Price"
            value={product.price}
            name="price"
            onChange={handleOnChange}
          />
          {errors.price && (
            <p style={{ color: "red", fontSize: "13px" }}>* {errors.price}</p>
          )}
        </Form.Group>

        {/* -------- product image --------- */}
        <Form.Group
          className="mb-3 group"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="label">{t("product.image")} :</Form.Label>
          <Form.Control
            className="control"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageUpload}
          />
          {imagePreview && (
            <div>
              <img
                src={imagePreview}
                alt="Product_Image"
                style={{
                  width: "200px",
                  height: "200px",
                  marginTop: "10px",
                  borderRadius: "25px",
                  border: "1px solid #d4d4d4ab",
                  boxShadow: "1px 1px 2px 2px #33343426",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          {errors.image && (
            <p style={{ color: "red", fontSize: "13px" }}>* {errors.image}</p>
          )}
        </Form.Group>

        <Button type="submit" style={{ backgroundColor: "blue" }}>
          {t("buttons.updateProduct")}
        </Button>
      </Form>
    </div>
  );
};

export default UpdateProductPage;
