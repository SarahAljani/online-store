import React from "react";
import { Button } from "react-bootstrap";
import "../assests/productPage.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ProductPage = () => {
  const location = useLocation();
  const product = location.state?.product; // Access the product object
  const colors =
    product.category === "men's clothing" ? ["Red", "Blue", "Black"] : [];
  const { t, i18n } = useTranslation();
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
          <strong>{t("productPage.category")}:</strong>{" "}
          {product.category}
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

        <Button className="add-to-cart-btn">
          {t("productPage.addToCart")}
        </Button>
      </div>
    </div>
  );
};
export default ProductPage;
