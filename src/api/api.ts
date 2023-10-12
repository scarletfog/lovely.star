import axios from "axios";

const ITEM_LIST_URL = "https://playground.tesonet.lt/v1/servers";
const LOGIN_URL = "https://playground.tesonet.lt/v1/tokens";

export const getList = (user: any) => {
  return axios.get(ITEM_LIST_URL, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};

export const loginUser = async (username: string, password: string): Promise<any> => {
  const userData = { username, password };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(LOGIN_URL, userData, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
