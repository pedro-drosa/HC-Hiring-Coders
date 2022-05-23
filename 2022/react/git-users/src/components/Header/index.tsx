import { useNavigate } from "react-router-dom";
import { THeaderProps } from "../../types/THeaderProps";
import { Content, RepositoryControll } from "./styles";

export const Header = ({ userData }: THeaderProps): JSX.Element => {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("@hcgitreact");
    navigate("/");
  }

  return (
    <Content>
      <img src={userData.avatar_url} alt={userData.name} />
      <div>
        <h1>{userData.name}</h1>
        <span>@{userData.login}</span>
        <p>{userData.bio} </p>
        <RepositoryControll>
          <a href={`https://github.com/${userData.login}`}>
            Ver perfil completo
          </a>
          <button onClick={handleClick}>Buscar outro usuário</button>
        </RepositoryControll>
      </div>
    </Content>
  );
};
