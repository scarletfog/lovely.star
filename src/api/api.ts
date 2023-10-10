
import axios from 'axios';

const ITEM_LIST = 'https://playground.tesonet.lt/v1/servers';
const LOGIN = 'https://playground.tesonet.lt/v1/tokens';
const token = 'dummyfornow'

export const getList = (ke: string) => {
  return axios.get(ITEM_LIST, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getToken = (username: string, password: string) => {
  return axios.post(LOGIN, {
    username,
    password
  });
};

