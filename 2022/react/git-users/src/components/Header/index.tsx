import { Content, RepositoryControll } from "./styles";

type HeaderProps = {
  userData: {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
  };
};

function handleClick() {
  localStorage.removeItem("@hcgitreact");
}

export const Header = ({ userData }: HeaderProps): JSX.Element => {
  return (
    <Content>
      <img src={userData.avatar_url} alt={userData.name} />
      <div>
        <h1>{userData.name}</h1>
        <span>@{userData.login}</span>
        <p>{userData.bio} </p>
        <RepositoryControll>
          <a
            href={`https://github.com/${userData.login}`}
            target="_blank"
            rel="noreferrer"
          >
            Ver perfil completo
          </a>
          <button onClick={handleClick}>Buscar outro usuário</button>
        </RepositoryControll>
      </div>
    </Content>
  );
};
