import axios from "axios";

const Model = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros",
});

export default Model;
