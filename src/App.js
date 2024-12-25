import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import "./index.css";
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (i18n.language === "ar") {
      rootElement.classList.add("lang-ar");
      rootElement.classList.remove("lang-en");
    } else {
      rootElement.classList.add("lang-en");
      rootElement.classList.remove("lang-ar");
    }
  }, [i18n.language]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
