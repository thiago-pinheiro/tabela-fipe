import axios from "axios";

const Brand = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros",
});

export default Brand;
