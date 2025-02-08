import React from "react";
import { Button } from "react-bootstrap";
import "../assests/productPage.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { BsCheckCircle } from "react-icons/bs";
import { IoAddCircleOutline } from "react-icons/io5";
import { addProduct } from "../redux/reducers/cartSlice";
const ProductPage = () => {
  const location = useLocation();
  const product = location.state?.product; // Access the product object
  const addedToCart = useSelector((state) => state.cart.addedToCart);
  const colors =
    product.category === "men's clothing" ? ["Red", "Blue", "Black"] : [];
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addProduct(product));
  };
  return (
    <div className="product-page">
      {/* Image Section */}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-category">
          <strong>{t("productPage.category")}:</strong> {product.category}
        </p>

        {/* Colors Section (if applicable) */}
        {colors.length > 0 && (
          <div className="product-colors">
            <strong>{t("productPage.availableColors")}:</strong>
            <ul>
              {colors.map((color, index) => (
                <li
                  key={index}
                  style={{ backgroundColor: color.toLowerCase() }}
                ></li>
              ))}
            </ul>
          </div>
        )}

        <p className="product-price">
          <strong>{t("productPage.price")}:</strong> ${product.price.toFixed(2)}
        </p>
        <div className="product-rating">
          <span>
            <strong>{t("productPage.rating")}:</strong> {product.rating.rate} /
            5 ({product.rating.count} reviews)
          </span>
        </div>

        <Button
          className="add-to-cart-btn"
          style={{
            backgroundColor: addedToCart[product.id] ? "blue" : "#5c5c5c",
            color: addedToCart[product.id] ? "#fff" : "",
            fontSize: "16px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          onClick={() => handleAdd(product)}
        >
          {!addedToCart[product.id]
            ? t("productPage.addToCart")
            : t("productPage.removeFromCart")}
          {addedToCart[product.id] ? (
            <BsCheckCircle style={{ width: "22px", height: "22px" }} />
          ) : (
            <IoAddCircleOutline style={{ width: "22px", height: "22px" }} />
          )}
        </Button>
      </div>
    </div>
  );
};
export default ProductPage;
