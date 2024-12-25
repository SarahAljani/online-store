import { useState, useEffect } from "react";
import "../assests/Search.css";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { categories } from "../Components/data/categories.js";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
const marks = [
  { value: 0, label: "1" },
  { value: 20, label: "2" },
  { value: 40, label: "3" },
  { value: 60, label: "4" },
  { value: 100, label: "5" },
];

function valuetext(value) {
  return `${value / 20 + 1}`;
}
const Search = ({ products, setFilteredProducts }) => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory((prev) => (prev === category ? "" : category));
  };

  const handleRatingChange = (e, newValue) => setSelectedRating(newValue);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedRating(0);
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      const title = product.title.toLowerCase();
      const description = product.description.toLowerCase();
      const category = product.category.toLowerCase();
      const rating = product.rating.rate * 20; // Convert rating to match slider scale (0-100)
      const searchTermLower = searchTerm.toLowerCase();
      return (
        (title.includes(searchTermLower) ||
          description.includes(searchTermLower)) &&
        (!selectedCategory || category === selectedCategory.toLowerCase()) &&
        rating >= selectedRating
      );
    });
    setFilteredProducts(filteredProducts);
  }, [searchTerm, selectedCategory, selectedRating, products]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          rowGap: "10px",
          width: "350px",
        }}
      >
        <div className="lable-search">{t("search.title")}</div>
        <StyledTextField
          variant="outlined"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleSearch}
          className="search"
          sx={{
            width: "100%", // Increased width
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "#0114bb",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0114bb",
              },
            },
            "& .MuiInputBase-input::placeholder": {
              color: "gray",
            },
          }}
        />
        <Accordion style={{ marginBottom: "20px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ color: "blue" }}
          >
            {t("search.filter")}
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <div className="lable-search">{t("search.category")}</div>
              <RadioGroup
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {categories &&
                  categories.map((c) => (
                    <FormControlLabel
                      key={c}
                      value={c}
                      control={<Radio />}
                      label={c}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
            <Box sx={{ width: 300 }}>
              <div className="lable-search" style={{ marginBottom: "30px" }}>
                {t("search.rating")}
              </div>
              <Slider
                aria-label="Rating"
                value={selectedRating}
                defaultValue={0}
                getAriaValueText={valuetext}
                step={20}
                style={{ color: "blue" }}
                marks={marks}
                valueLabelDisplay="on"
                onChange={handleRatingChange}
              />
            </Box>
            <Button
              variant="contained"
              onClick={handleReset}
              style={{ marginBottom: "20px", backgroundColor: "blue" }}
            >
              {t("search.reset")}
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

const StyledTextField = styled(TextField)({
  fontFamily: "'Noto Sans', sans-serif",
});

export default Search;
