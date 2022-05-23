type GET_USER_TYPES = {
  userName: string;
};

export const GET_USER = ({ userName }: GET_USER_TYPES) => {
  return {
    url: `https://api.github.com/users/${userName}`,
    options: {
      method: "GET",
      cache: "no-cache",
    },
  };
};

export const GET_REPO = ({ userName }: GET_USER_TYPES) => {
  return {
    url: `https://api.github.com/users/${userName}/repos`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};
