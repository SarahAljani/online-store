import axios from "axios";
import { axiosInstance } from "./axiosService";
const deleteProducts = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .delete(`https://fakestoreapi.com/products/products/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default deleteProducts;
