import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    background-color:#fff9f9;
  }
`;

export const General = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .title {
    h2 {
      font-weight: 500;
    }
    margin: 90px auto 20px auto;
  }
`;
export const Container = styled.div`
  /* display: inline-block; */
  margin: 20px auto 80px auto;
  width: 450px;
  height: 300px;
  .autoselect {
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
  }
  h1 {
    margin-left: 8px;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

export const ContainerResult = styled.div`
  background-color: gray;
  .texts {
    display: flex;
    justify-content: center;
  }
`;
