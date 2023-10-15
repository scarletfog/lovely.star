import axios from "axios";

import { getToken } from "auth/localStorage";

const BASE_URL = "https://playground.tesonet.lt/v1";
const DEFAULT_TIMEOUT = 1000;

const ITEM_LIST_URL = "/servers";
const LOGIN_URL = "/tokens";

const axiosPublic = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosProtected = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + getToken(),
  },
});

// update axiosProtected instance to use token provided through LS
axiosProtected.interceptors.request.use(function (config) {
  const token = getToken();

  if (config?.headers) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
  }

  return config;
});

interface IServerResponse {
  name: string;
  distance: number;
}

export const getList = () => {
  return axiosProtected.get<IServerResponse[]>(ITEM_LIST_URL);
};

export const loginUser = async (
  username: string,
  password: string,
): Promise<any> => {
  const userData = { username, password };

  return axiosPublic.post(LOGIN_URL, userData).then((res) => res.data);
};
