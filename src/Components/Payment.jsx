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
      <h3 style={{ fontWeight: "600", fontSize: "24px", marginBottom: "30px" }}>
        {t("payment.payment")}
      </h3>
      <FormControl>
        <RadioGroup
          value={paymentMethod} 
          name="payment-method"
          onChange={handlePaymentMethodChange}
          className="radiopay1"
        >
          <Radio value="cod" label={t("payment.cod")} color={"primary"} />
          <Radio value="op" label={t("payment.op")} color={"primary"} />
        </RadioGroup>
      </FormControl>

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
            sx={{ fontWeight: "lg", fontSize: "sm" }}
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
                sx={{ px: 2, alignItems: "center", justifyContent: "center" }}
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
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#024ebe",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#024ebe",
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
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#024ebe",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#024ebe",
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
                      borderColor: "gray",
                    },
                    "&:hover fieldset": {
                      borderColor: "#024ebe",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#024ebe",
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
      <Button style={{ marginTop: "20px" }}>Checkout</Button>
    </div>
  );
};

export default Payment;
