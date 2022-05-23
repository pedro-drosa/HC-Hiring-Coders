import { TRepositoryInfoProps } from "../../types/TRepositoryInfoProps";
import { Content, Repository } from "./styles";
import { Book } from "phosphor-react";

export const RepositoryInfo = ({
  userLogin,
  repositoriesData,
}: TRepositoryInfoProps): JSX.Element => {
  return (
    <Content>
      {repositoriesData.map((repository) => {
        return (
          <Repository
            href={`https://github.com/${userLogin}/${repository.name}`}
            key={repository.id}
          >
            <h2>
              <Book weight="thin" color="#777" />
              {repository.name}
            </h2>
            <p>{repository.description}</p>
          </Repository>
        );
      })}
    </Content>
  );
};
