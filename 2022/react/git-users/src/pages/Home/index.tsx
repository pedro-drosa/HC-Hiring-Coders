import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/global";
import { Title, Form, ErrorMessage } from "./styles";
import { GET_USER, GET_REPO } from "../../services/api";
import { TUserData } from "../../types/TUserData";

export const Home = (): JSX.Element => {
  const [newUser, setNewUser] = useState("");
  const [error, setError] = useState<string | boolean>("");
  const [loadingUser, setLoadingUser] = useState<boolean | null>(null);
  const navigate = useNavigate();

  async function handleSearch(event: FormEvent) {
    try {
      setError(false);
      setLoadingUser(true);
      event.preventDefault();

      if (!newUser) throw new Error("Digite o nome de um usuário!");

      const { url: user_url } = GET_USER({ userName: newUser });
      const { url: repo_url } = GET_REPO({ userName: newUser });

      const user = await (await fetch(user_url)).json();

      const repositories = await (await fetch(repo_url)).json();

      const userData: TUserData = {
        user,
        repositories,
      };

      if (user.message || repositories.message) {
        throw new Error("Usuário não encontrado!");
      }

      localStorage.setItem("@hcgitreact", JSON.stringify(userData));
      navigate("/repositories");
    } catch (err) {
      setError(`${err}`);
    } finally {
      setLoadingUser(false);
      setNewUser("");
    }
  }

  return (
    <Container>
      <Title>Liste repositórios de usuários do Github.</Title>
      <Form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          value={newUser}
          onChange={({ target }) => setNewUser(target.value)}
        />
        {loadingUser ? (
          <button disabled type="submit">
            Buscando usuário ...
          </button>
        ) : (
          <button type="submit">Pesquisar</button>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Form>
    </Container>
  );
};
