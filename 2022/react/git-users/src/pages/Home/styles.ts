import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  max-width: 700px;
  line-height: 3rem;
  margin-bottom: 10px;

  @media (max-width: 290px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  input {
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    font-size: 1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }

  button {
    flex: 1;
    padding: 15px;
    background: #03ad50;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.2s ease-out 100ms;

    &:disabled {
      cursor: wait;
    }

    &:hover {
      background: #04d361;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;
