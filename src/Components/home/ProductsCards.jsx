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
import "@mantine/carousel/styles.css";
import women_category from "../../assests/women_category.jpg";
import men_category from "../../assests/man_category.jpg";
import kids_category from "../../assests/kids_category.jpg";
import "@mantine/core/styles.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Accordion } from "@mui/material/Accordion";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ButtonBase } from "@mui/material";
import Bar from "../Bar";
import { deleteProduct } from "../../redux/actions/actions/productsActions";
import DeleteModal from "./../modals/DeleteModal";
import { persistor } from "../../redux/store";
import { addProduct } from "../../redux/reducers/cartSlice";
const ProductsCards = () => {
  const role = useSelector((state) => state.user.user?.role || "guest");
  FetchProducts();
  const { t, i18n } = useTranslation();
  const products = useSelector((state) => state.products.products);
  const addedToCart = useSelector((state) => state.cart.addedToCart);
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [idproduct, setIdproduct] = useState();
  const handleUpdate = (product) => {
    navigate(`/dashboard/update-product/${product.id}`, { state: { product } });
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    setShow(false);
  };
  const handleShow = (id) => {
    setIdproduct(id);
    setShow(true);
  };
  const handleReadMore = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
 const handleAdd = (product) => {
   dispatch(addProduct(product));
 };
  return (
    <>
      <Bar />
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        withIndicators
        height={350}
        slideSize="50%"
        slideGap="md"
        controlsOffset="md"
        controlSize={30}
        controlColor={"blue"}
        dragFree
        loop
        align="start"
        indicatorOffset="md"
        styles={{
          indicators: {
            backgroundColor: "white",
            marginBottom: "-50px",
          },
          indicator: {
            width: "17px",
            height: "8px",
            transition: "width 250ms ease",
            backgroundColor: "blue",
          },
          control: {
            backgroundColor: "white",
            color: "blue",
            fontWeight: "600",
          },
          marginBottom: "40px",
        }}
      >
        <Carousel.Slide className="slids">
          <img className="categories-images" src={women_category} alt="" />
          <div className="offer">OFFER 50%</div>
          <Button className="but">See More!</Button>
        </Carousel.Slide>
        <Carousel.Slide className="slids">
          <img className="categories-images" src={men_category} alt="" />
          <div className="offer">OFFER 50%</div>
          <Button className="but">See More!</Button>
        </Carousel.Slide>
        <Carousel.Slide className="slids">
          <img className="categories-images" src={kids_category} alt="" />
          <div className="offer">OFFER 50%</div>
          <Button className="but">See More!</Button>
        </Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Bar />
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
                <Button
                  onClick={() => handleReadMore(product)}
                  className="read"
                  style={{
                    backgroundColor: "transparent",
                    margin: "0",
                    padding: "0",
                    border: "none",
                  }}
                >
                  {t("readMore")}
                </Button>
                {role === "admin" ? (
                  <div
                    style={{
                      display: "flex", // Fix typo
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px", // Adds spacing between buttons
                    }}
                  >
                    <Button
                      style={{
                        display: "flex", // Ensures icon is centered inside the button
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        transition: "all 0.4s",
                        border: "1px solid #a0a0a0d6",
                        boxShadow:
                          "0px 1px 4px 0px #0000008f,0px 1px 9px 0px #6e6e6e58 inset",
                      }}
                    >
                      <EditIcon
                        sx={{
                          color: "#686868",
                          cursor: "pointer",
                        }}
                        onClick={() => handleUpdate(product)}
                      />
                    </Button>

                    <Button
                      style={{
                        display: "flex", // Ensures icon is centered inside the button
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        transition: "all 0.4s",
                        border: "1px solid #a0a0a0d6",
                        boxShadow:
                          "0px 1px 4px 0px #0000008f,0px 1px 9px 0px #6e6e6e58 inset",
                      }}
                    >
                      <DeleteForeverIcon
                        className="delete"
                        sx={{ color: "#f80909", cursor: "pointer" }}
                        onClick={() => handleShow(product.id)}
                      />
                    </Button>
                  </div>
                ) : (
                  <div className="buy">
                    <Button
                      style={{
                        display: "flex",
                        width: "100px",
                        height: "40px",
                        borderRadius: "12px",
                        justifyContent: "space-around",
                        backgroundColor: addedToCart[product.id]
                          ? "blue"
                          : "#5c5c5c",
                        color: addedToCart[product.id] ? "#fff" : "",
                        // borderColor: addedToCart[product.id] ? "blue" : "",
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
                        <BsCheckCircle
                          style={{ width: "22px", height: "22px" }}
                        />
                      ) : (
                        <IoAddCircleOutline
                          style={{ width: "22px", height: "22px" }}
                        />
                      )}
                    </Button>
                  </div>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      <DeleteModal
        show={show}
        setShow={setShow}
        handleDelete={() => handleDelete(idproduct)}
      />
      <Bar />
    </>
  );
};

export default ProductsCards;
