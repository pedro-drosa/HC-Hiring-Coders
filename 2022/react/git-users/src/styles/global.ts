import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;

    :focus {
      outline: 2px solid #04d361;
      outline-offset: 1px;
    }
  }

  body {
    background-color: #333;
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  a, button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1rem;
  }

  h1, h2 {
    color: #fff;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
    @media (max-width: 290px) {
      font-size: 0.5rem;
    }
  }

  p {
    color: #777777;
    @media (max-width: 500px) {
      font-size: 0.5rem;
    }
    @media (max-width: 290px) {
      font-size: 0.3rem;
    }
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;
