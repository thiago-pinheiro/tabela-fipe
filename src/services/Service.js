import axios from "axios";

const getBrand = () => {
  return axios
    .get("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    .then(function (response) {
      return response.data;
    });
};

const getModels = (brandId) => {
  return axios
    .get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos`
    )
    .then(function (response) {
      return response.data;
    });
};

const getAges = (brandId, modelId) => {
  return axios
    .get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos`
    )
    .then(function (response) {
      return response.data;
    });
};

const getGeneral = (brandId, modelId, ageId) => {
  return axios
    .get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandId}/modelos/${modelId}/anos/${ageId}`
    )
    .then(function (response) {
      return response.data;
    });
};

export { getBrand, getModels, getAges, getGeneral };
