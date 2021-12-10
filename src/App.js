import React from "react";
import AutoSelect from "./components/AutoComplete";
import ButtonUi from "./components/Button";
import { useEffect, useState } from "react";
import { getBrand, getModels, getAges, getGeneral } from "./services/Service";
import "./estilo.css";

function App() {
  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [ageOptions, setAgeOptions] = useState([]);
  const [result, setResult] = useState(null);
  const [selections, setSelections] = useState({
    brandSelected: null,
    modelId: null,
    ageId: null,
  });

  const getBrandOptions = async () => {
    const response = await getBrand();
    setBrandOptions(
      response.map((el) => ({ value: el.codigo, label: el.nome }))
    );
  };

  const getModelOptions = async () => {
    const response = await getModels(selections.brandSelected?.value);
    // console.log(response);
    setModelOptions(
      response.modelos.map((el) => ({ value: el.codigo, label: el.nome }))
    );
  };

  const getAgeOptions = async () => {
    const response = await getAges(
      selections.brandSelected?.value,
      selections.modelId?.value
    );
    // console.log(response);
    setAgeOptions(response.map((el) => ({ value: el.codigo, label: el.nome })));
  };

  const getResult = async () => {
    const response = await getGeneral(
      selections.brandSelected?.value,
      selections.modelId?.value,
      selections.ageId?.value
    );
    console.log(response);
    setResult(response.Valor);
  };

  const handleClick = () => {
    getResult();
  };

  useEffect(() => {
    getBrandOptions();
  }, []);

  useEffect(() => {
    getModelOptions();
  }, [selections.brandSelected]);

  useEffect(() => {
    getAgeOptions();
  }, [selections.modelId]);

  return (
    <div className="general">
      {result === null && (
        <div className="general">
          <div className="title">
            <h1>Tabela Fipe</h1>
            <h2>Consulte o valor de um veículo de forma gratuita</h2>
          </div>

          <div className="container">
            <div className="autoselect">
              <AutoSelect
                value={selections.brandSelected}
                options={brandOptions}
                label="Marca"
                onChange={(e, newValue) =>
                  setSelections((prevState) => ({
                    ...prevState,
                    brandSelected: newValue,
                  }))
                }
              />
            </div>
            {selections.brandSelected && (
              <div className="autoselect">
                <AutoSelect
                  options={modelOptions}
                  value={selections.modelId}
                  label="Modelo"
                  onChange={(e, newValue) =>
                    setSelections((prevState) => ({
                      ...prevState,
                      modelId: newValue,
                    }))
                  }
                />
              </div>
            )}

            {selections.modelId && (
              <div className="autoselect">
                <AutoSelect
                  options={ageOptions}
                  value={selections.ageId}
                  label="Ano"
                  onChange={(e, newValue) =>
                    setSelections((prevState) => ({
                      ...prevState,
                      ageId: newValue,
                    }))
                  }
                />
              </div>
            )}

            <div className="containerButton">
              <ButtonUi
                disabled={!selections.ageId}
                variant="contained"
                onClick={handleClick}
              >
                Consultar Preço
              </ButtonUi>
            </div>
          </div>
        </div>
      )}
      {result && (
        <div className="containerResult">
          <div className="texts">
            <h1 className="textResult">Tabela Fipe:</h1>
            <h1 className="textResult"> {selections.brandSelected?.label}</h1>
            <h1 className="textResult"> {selections.modelId?.label}</h1>
            <h1 className="textResult"> {selections.ageId?.label}</h1>
          </div>
          <div className="price">
            <h1 className="textPrice">{result}</h1>
          </div>
          <p>Este é o preço de compra do veículo</p>
          <a href="http://localhost:3000/">Veja outro veículo</a>
        </div>
      )}
    </div>
  );
}

export default App;
