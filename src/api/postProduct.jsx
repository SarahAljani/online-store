import axios from "axios";
import { axiosInstance } from "./axiosService";


const postProduct = (product) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`https://fakestoreapi.com/products/`, product)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default postProduct;
