import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DashoboardTable from "../Components/DashBoard/DashoboardTable";
import { useTranslation } from "react-i18next";
const DashboardPage = () => {
  const navigate = useNavigate();
  const handleAddButton = () => {
    navigate("add-product");
  };
  const { t } = useTranslation();
  return (
    <div
      style={{
        width: "100%",
        margin: "30px 25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        gap: "20px",
      }}
    >
      <div
        className="Add"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "20px",
        }}
      >
        {t("buttons.addProduct")}:
        <Button onClick={handleAddButton} style={{ backgroundColor: "blue" }}>
          {" "}
          {t("buttons.addProduct")}
        </Button>
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "blue",
          boxShadow: "0 0 2px blue, 0 0 5px blue, 0 0 10px blue",
        }}
      ></div>
      <hr />
      <DashoboardTable />
    </div>
  );
};

export default DashboardPage;
