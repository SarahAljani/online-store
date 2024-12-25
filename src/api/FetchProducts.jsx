import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/actions/actions/productsActions";
import { axiosInstance } from "./axiosService";

export function FetchProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFunction = () => {
      return new Promise((resolve, reject) => {
        axiosInstance
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            resolve(response.data);
            dispatch(addProducts(response.data));
          })
          .catch((error) => {
            reject(error);
          });
      });
    };

    fetchDataFunction(); // Call the fetch function on component mount
  }, []); // Only run once when the component is mounted

  return null; 
}

export default FetchProducts;
