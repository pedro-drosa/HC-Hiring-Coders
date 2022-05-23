import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  gap: 20px;

  span {
    color: #777777;
    font-weight: 700;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;

    @media (max-width: 500px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const RepositoryControll = styled.nav`
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  gap: 10px;

  a,
  button {
    color: #03ad50;
    padding: 5px 5px 5px 0;

    &:hover {
      color: #04d361;
    }

    @media (max-width: 500px) {
      font-size: 0.2rem;
    }
  }
`;
