import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Language } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import uae from "../assests/uae.png";
import "../assests/selectLanguage.css";
import britain from "../assests/britain.png";
export default function SelectLanguage() {
  const { i18n } = useTranslation();
  console.log(i18n);
  const [language, setLanguage] = useState(localStorage.getItem("language"));

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    console.log("Selected language:", newLanguage); // Debugging
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage).then(() => {
      console.log("Language changed to:", i18n.language); // Debugging
    });
    localStorage.setItem("language", newLanguage);
  };

  return (
    <FormControl sx={{ width: "70px ", marginTop: "-9px" }} className="lan">
      {/* <InputLabel id="demo-simple-select-label">
        {language === "En" ? (
      
        ) : (
          <></>
        )}
      </InputLabel> */}
      <Select
        // labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={language}
        // label={language}
        onChange={handleChange}
        style={{ border: "none" }}
      >
        <MenuItem value="en">
          <img src={britain} alt="britain" style={{ marginRight: "12px" }} />
        </MenuItem>
        <MenuItem value="ar">
          <img src={uae} alt="uae" style={{ marginRight: "12px" }} />
        </MenuItem>
      </Select>
    </FormControl>
  );
}
