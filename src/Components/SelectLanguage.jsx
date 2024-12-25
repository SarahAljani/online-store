import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Language } from "@mui/icons-material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../assests/selectLanguage.css";
export default function SelectLanguage() {
  const { i18n } = useTranslation();
  console.log(i18n);
  const [language, setLanguage] = useState("en");

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
    <FormControl sx={{ width: "80px " }} className="lan">
      <InputLabel id="demo-simple-select-label">{language}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={language}
        label={language}
        onChange={handleChange}
      >
        <MenuItem value="en">En</MenuItem>
        <MenuItem value="ar">Ar</MenuItem>
      </Select>
    </FormControl>
  );
}
