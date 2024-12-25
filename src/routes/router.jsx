import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Home from "../apps/Home";
import DashboardPage from "../apps/DashboardPage";
import AddProduct from "../apps/AddProduct";
import UpdateProductPage from "../apps/UpdateProductPage";
import Login from "../apps/Login";
import Cart from "../Components/Cart";
import ProductPage from "../apps/ProductPage";


const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "login", element: <Login /> },
      { path: "dashboard/add-product", element: <AddProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <ProductPage /> },
      {
        path: "dashboard/update-product/:id", // Dynamic parameter :id
        element: <UpdateProductPage />,
      },
    ],
  },
]);

export default Router;
