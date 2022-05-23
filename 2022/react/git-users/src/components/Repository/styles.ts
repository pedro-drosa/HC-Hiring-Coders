import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 210px;
`;

export const Repository = styled.a`
  transition: transform 0.2s ease-out 100ms;

  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    transform: scale(1.01);
  }
`;
