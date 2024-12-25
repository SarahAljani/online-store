import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchProducts from "../../api/FetchProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "../../assests/homeStyles/ProductsCards.css";
import { useNavigate } from "react-router-dom";
import { productsData } from "./products";
import Search from "../Search";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { addProduct } from "../../redux/actions/actions/cartActions";

const ProductsCards = () => {
  FetchProducts();
  const { t, i18n } = useTranslation();
  const products = useSelector((state) => state.products.products);
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState({}); // New state to track added products

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReadMore = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
  const handleAdd = (product) => {
    dispatch(addProduct(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };

  return (
    <>
      <Search products={products} setFilteredProducts={setFilteredProducts} />
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="namePrice">
              <h3>
                {product.title.length > 65
                  ? product.title.slice(0, 65) + "..."
                  : product.title}
              </h3>
              <div className="price_rating">
                <div>${product.price}</div>
                <div className="stars">
                  {Array.from({ length: 5 }, (_, index) => {
                    const rating = product.rating.rate;
                    const starClass =
                      rating >= index + 1
                        ? "filled"
                        : rating >= index + 0.5
                        ? "half-filled"
                        : "";
                    return (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={`star ${starClass}`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="desc_buy">
              <p className="desc">
                {product.description.length > 80
                  ? product.description.toLowerCase().slice(0, 80)
                  : product.description.toLowerCase()}
                ...
                <button
                  onClick={() => handleReadMore(product)}
                  className="read"
                >
                  {t("readMore")}
                </button>
              </p>
              <div className="buy">
                <Button
                  style={{
                    display: "flex",
                    width: "100px",
                    justifyContent: "space-around",
                    backgroundColor: addedToCart[product.id] ? "blue" : "",
                    color: addedToCart[product.id] ? "#fff" : "",
                    borderColor: addedToCart[product.id] ? "blue" : "",
                    transition: "all 0.4s",
                  }}
                  className="addtocart"
                  onClick={() => handleAdd(product)}
                >
                  <FontAwesomeIcon
                    className="icon-cart"
                    icon={faCartShopping}
                    style={{ width: "22px", height: "22px" }}
                  />
                  {addedToCart[product.id] ? (
                    <BsCheckCircle style={{ width: "22px", height: "22px" }} />
                  ) : (
                    <IoAddCircleOutline
                      style={{ width: "22px", height: "22px" }}
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsCards;
