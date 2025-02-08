import React from "react";
import Box from "@mui/joy/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import { FormControl } from "@mui/joy";
import { FaCcPaypal } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import "../assests/cart.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FormControlLabel } from "@mui/material";
import { persistor } from "../redux/store";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = React.useState("cod");
  const [justify, setJustify] = React.useState("flex-start");

  const handlePaymentMethodChange = (event) => {
    console.log("Selected value:", event.target.value);
    setPaymentMethod(event.target.value);
  };
  const { t } = useTranslation();
  return (
    <div className="pay">
      <h3
        style={{
          fontWeight: "600",
          fontSize: "20px",
          marginBottom: "10px",
          padding: "0px",
        }}
      >
        {t("payment.payment")}
      </h3>
      <FormControl
        style={{
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <RadioGroup
          value={paymentMethod}
          name="payment-method"
          onChange={handlePaymentMethodChange}
          className="radiopay1"
          sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }}
        >
          <FormControlLabel
            control={<Radio />}
            value="cod"
            label={t("payment.cod")}
            color={"primary"}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#ffffff", // or another visible color
                fontWeight: "normal",
                fontFamily: "inherit",
              },
              display: "flex",
              columnGap: "10px",
              margin: "0px",
            }}
          />
          <FormControlLabel
            control={<Radio sx={{}} />}
            value="op"
            label={t("payment.op")}
            color={"primary"}
            sx={{
              "& .MuiFormControlLabel-label": {
                color: "#ffffff", // or another visible color
                fontWeight: "normal",
                fontFamily: "inherit",
              },
              display: "flex",
              columnGap: "10px",
              margin: "0px",
            }}
          />
        </RadioGroup>
      </FormControl>
      {/* <Box style={{ width: "100%" }}>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <FormControlLabel
            value="cod"
            label={t("payment.cod")}
            control={<Radio />}
            sx={{
              width: "100%",
            }}
          />
          <FormControlLabel
            control={<Radio />}
            value="op"
            label={t("payment.op")}
          />
        </RadioGroup>
      </Box> */}
      {paymentMethod === "cod" && (
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            gap: 2,
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography
            id="segmented-controls-example"
            sx={{
              fontWeight: "bold",
              fontSize: "lg",
              color: "#ffffff !important",
              marginBottom: "30px 0 !important",
            }}
          >
            {t("payment.choose")}
          </Typography>
          <RadioGroup
            orientation="horizontal"
            aria-labelledby="segmented-controls-example"
            name="justify"
            value={justify} // Controlled value
            onChange={(event) => setJustify(event.target.value)}
            sx={{
              minHeight: 48,
              padding: "4px",
              borderRadius: "12px",
              bgcolor: "neutral.softBg",
              "--RadioGroup-gap": "4px",
              "--Radio-actionRadius": "8px",
              display: "flex",
              justifyContent: "center",
            }}
            className="paycard"
          >
            {[
              {
                name: "visa",
                icon: <RiVisaFill style={{ fontSize: "40px" }} />,
              },
              {
                name: "paypal",
                icon: <FaCcPaypal style={{ fontSize: "40px" }} />,
              },
            ].map((item) => (
              <Radio
                key={item.name}
                className="radiopay2"
                value={item.name}
                disableIcon
                label={item.icon}
                variant="plain"
                sx={{
                  px: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: {
                      ...(checked && {
                        bgcolor: "background.surface",
                        boxShadow: "sm",
                        "&:hover": {
                          bgcolor: "background.surface",
                        },
                      }),
                    },
                  }),
                }}
              />
            ))}
          </RadioGroup>

          {/* Text Fields */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            alignItems={"center"}
            rowGap={"20px"}
          >
            <FormControl>
              <TextField
                label="Card Number"
                variant="outlined"
                placeholder="Enter card number"
                className="search"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#1765da !important",
                    },
                    "&:hover fieldset": {
                      borderColor: "#1765da !important",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1765da !important",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "gray",
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Expiry Date"
                variant="outlined"
                placeholder="MM/YY"
                className="search"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#1765da !important",
                    },
                    "&:hover fieldset": {
                      borderColor: "#1765da !important",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1765da !important",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "gray",
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="CVV"
                variant="outlined"
                placeholder="Enter CVV"
                className="f"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#1765da !important",
                    },
                    "&:hover fieldset": {
                      borderColor: "#1765da !important",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#1765da !important",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "gray",
                  },
                  "& .MuiInputBase-input:focus& .MuiInputBase-input::label": {
                    color: "gray",
                  },
                }}
              />
            </FormControl>
          </Box>
        </Box>
      )}

      {paymentMethod === "op" && (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography>{t("payment.onlineText")}</Typography>
        </Box>
      )}
      <Button
        style={{
          marginTop: "20px",
          border: "none",
          backgroundColor: "white !important",
        }}
      >
        Order Now
      </Button>
    </div>
  );
};

export default Payment;
