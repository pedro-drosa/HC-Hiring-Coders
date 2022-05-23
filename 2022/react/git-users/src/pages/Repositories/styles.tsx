import styled from "styled-components";

export const RepositoryInfo = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Repository = styled.a`
  border: 1px solid #777777;
  border-radius: 5px;
  padding: 15px;
  transition: transform 0.2s ease-out 100ms;

  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    transform: scale(1.03);
  }
`;
