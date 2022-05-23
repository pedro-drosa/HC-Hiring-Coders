import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "../../styles/global";
import { TUserData } from "../../types/TUserData";
import { RepositoryInfo } from "../../components/Repository";

export const Repositories = (): JSX.Element => {
  const [userData, setUserData] = useState<TUserData>({} as TUserData);
  const [loadingUserData, setLoadingUserData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoadingUserData(true);
    const storage = localStorage.getItem("@hcgitreact");
    if (!storage) navigate("/");
    const storageParsed = JSON.parse(storage as string);
    setUserData(storageParsed);
    setLoadingUserData(false);
  }, [navigate]);

  return (
    <Container>
      {!loadingUserData && userData.user && userData.repositories ? (
        <>
          <Header userData={userData.user} />
          <RepositoryInfo
            repositoriesData={userData.repositories}
            userLogin={userData.user.login}
          />
        </>
      ) : (
        <h1>Carregando, pera ae mano!</h1>
      )}
    </Container>
  );
};
