import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  incrementProduct,
  DEcrementProduct,
} from "../redux/actions/actions/cartActions";
import "../assests/cart.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Payment from "./Payment";
import { useTranslation } from "react-i18next";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(
    cartItems.reduce((acc, e) => acc + e.price * e.number, 0)
  );
  const { t, i18n } = useTranslation();
  useEffect(() => {}, [dispatch]);

  const handleIncrement = (index, price) => {
    dispatch(incrementProduct(index));
    setTotal((prevTotal) => prevTotal + price);
  };

  const handleDecrement = (index, price) => {
    dispatch(DEcrementProduct(index));
    setTotal((prevTotal) => prevTotal - price);
  };

  const handleDelete = (index, price, number) => {
    dispatch(deleteProduct(index));
    setTotal((prevTotal) => prevTotal - price * number);
  };

  return (
    <div className="cartDiv" style={{ width: "100%" }}>
      {cartItems.length > 0 ? (
        <div className="cart-cards">
          <h3
            style={{
              fontWeight: "800",
              fontSize: "20px",
              marginBottom: "20px",
              color: "blue",
            }}
          >
            {t("cart")}:
          </h3>
          {cartItems.map((item, index) => (
            <div className="cartItem" key={item.id}>
              <div className="imageContainer">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100px" }}
                  className="imageItem"
                />
              </div>
              <div className="details">
                <h3 className="cardtitle">{item.title}</h3>
                <p className="carddesc">
                  {item.description.substring(0, 160)} ...
                </p>
              </div>
              <div className="price">
                <p>${item.price}</p>
              </div>
              {/* Counter Section */}
              <div className="counter">
                <Button
                  onClick={() => handleDecrement(index, item.price)}
                  className="indic"
                >
                  -
                </Button>
                <span>{item.number}</span>
                <Button
                  onClick={() => handleIncrement(index, item.price)}
                  className="indic"
                >
                  +
                </Button>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(index, item.price, item.number)}
                className="delete-btn"
              >
                <RiDeleteBin4Fill className="trash" />
              </button>
            </div>
          ))}
          <hr />
          <div className="total-price">
            <h4>
              {t("total")}:{" "}
              <span style={{ color: "blue" }}>${total.toFixed(2)}</span>
            </h4>
          </div>
        </div>
      ) : (
        <div
          className="empty-cart"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "blue", fontWeight: "700", fontSize: "25px" }}>
            {t("cartempty")}
          </h3>
          <img
            src={require("../assests/cart.png")}
            alt="Empty Cart"
            style={{
              margin: "20px 0",
              width: "400px",
            }}
          />
        </div>
      )}

      <div className="payment">
        <Payment />
      </div>
    </div>
  );
};

export default Cart;
