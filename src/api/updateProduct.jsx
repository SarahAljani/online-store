import axios from "axios";
import { axiosInstance } from "./axiosService";
const updateProduct = (product, id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(`https://fakestoreapi.com/products/${id}`, product)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default updateProduct;
