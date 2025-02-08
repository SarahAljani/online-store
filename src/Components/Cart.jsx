import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assests/cart.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Payment from "./Payment";
import { useTranslation } from "react-i18next";
import {
  decrementProductQuantity,
  deleteProduct,
  incrementProductQuantity,
} from "../redux/reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const total = cartItems.reduce((acc, e) => acc + e.price * e.number, 0);

  const handleIncrement = (id) => {
    dispatch(incrementProductQuantity(id));
  };

  const handleDecrement = (id) => {
    const item = cartItems.find((prod) => prod.id === id);
    if (item.number > 1) {
      dispatch(decrementProductQuantity(id));
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
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
          {cartItems.map((item) => (
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
                ${item.price}
              </div>

              {/* Counter Section */}
              <div className="counter">
                <Button
                  onClick={() => handleDecrement(item.id)}
                  className="indic"
                >
                  -
                </Button>
                <span>{item.number}</span>
                <Button
                  onClick={() => handleIncrement(item.id)}
                  className="indic"
                >
                  +
                </Button>
              </div>

              {/* Delete Button */}
              <Button
                className="delete-btn"
                style={{
                  backgroundColor: "transparent",
                  margin: "0",
                  padding: "0",
                  border: "none",
                }}
              >
                <RiDeleteBin4Fill
                  className="trash"
                  onClick={() => handleDelete(item.id)}
                />
              </Button>
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
