import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "./i18n";
import { Suspense } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { MantineProvider } from "@mantine/core";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Provider store={store}>
      <Suspense fallback="...Loading">
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Suspense>
    </Provider>
  </MantineProvider>
);
