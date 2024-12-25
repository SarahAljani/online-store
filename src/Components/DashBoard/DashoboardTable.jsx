import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/actions/productsActions";
import DeleteModal from "../modals/DeleteModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "../../assests/dashboardTable.css";

const DashoboardTable = () => {
  const [show, setShow] = useState(false);
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [idproduct, setIdproduct] = useState();
  const style = {
    fontWeight: "800",
    fontSize: "18px",
    alignSelf: "center",
    justifySelf: "center",
    margin: "20px",
  };

  const styledata = {
    fontWeight: "550",
    fontSize: "15px",
    alignSelf: "center",
    justifySelf: "center",
    margin: "20px",
  };

  const handleUpdate = (product) => {
    navigate(`update-product/${product.id}`, {
      state: {
        product, // Pass the entire product object to state
      },
    });
  };

  const handleShow = (id) => {
    setIdproduct(id);
    setShow(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    setShow(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="table-section"
        style={{
          width: "100%",
          boxShadow: "1px 1px 3px 5px #33333313,-1px -1px 3px 5px #33333313",
          borderLeft: "3px solid blue",
          borderRadius: "15px",
        }}
      >
        {/*----------------------------------- table head ------------------------------------------*/}
        <div
          className="table-head"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            height: "40px",
            columnGap: "10px",
            textAlign: "center",
            alignContent: "space-between",
            justifyContent: "space-between",
          }}
        >
          <div className="td" style={{ width: "5%", ...style }}>
            id
          </div>
          <div className="td" style={{ width: "30%", ...style }}>
            Title
          </div>
          <div className="td" style={{ width: "20%", ...style }}>
            Category
          </div>
          <div className="td" style={{ width: "15%", ...style }}>
            Price
          </div>
          <div className="td" style={{ width: "15%", ...style }}>
            Rating
          </div>
          <div className="td" style={{ width: "15%", ...style }}>
            Actions
          </div>
        </div>
        {/*----------------------------------- table body ------------------------------------------*/}
        <div className="table-body">
          {products &&
            products.map((product) => (
              <div
                className="table-row"
                key={product.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  height: "80px",
                  columnGap: "10px",
                  textAlign: "center",
                  alignContent: "space-between",
                  justifyContent: "space-between",
                  border: "1px solid #e9e9e9",
                }}
              >
                <div className="tdata" style={{ width: "5%", ...styledata }}>
                  {product.id}
                </div>
                <div
                  className="tdata"
                  style={{
                    width: "30%",
                    ...styledata,
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "start",
                    columnGap: "20px",
                  }}
                >
                  <img
                    src={product.image}
                    alt="product images"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "45px",
                    }}
                  />
                  {product.title}
                </div>
                <div className="tdata" style={{ width: "20%", ...styledata }}>
                  {product.category}
                </div>
                <div className="tdata" style={{ width: "15%", ...styledata }}>
                  {product.price}
                </div>
                <div className="tdata" style={{ width: "15%", ...styledata }}>
                  {product.rating ? product.rating.rate : "No rating yet!"}
                </div>
                <div className="tdata" style={{ width: "15%", ...styledata }}>
                  <EditIcon
                    className="edit"
                    sx={{
                      color: "#27037a",
                      cursor: "pointer",
                      marginRight: "20px",
                    }}
                    onClick={() => handleUpdate(product)} // Pass the product id
                  />

                  <DeleteForeverIcon
                    className="delete"
                    sx={{ color: "#fa3403", cursor: "pointer" }}
                    onClick={() => handleShow(product.id)} // Correctly opens the modal
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      <DeleteModal
        show={show}
        setShow={setShow}
        handleDelete={() => handleDelete(idproduct)}
      />
    </div>
  );
};

export default DashoboardTable;
