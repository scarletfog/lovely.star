export interface UserData {
  accessToken: string;
  username: string;
}

const USER_LOCAL_STORAGE_KEY = "LOVELY_STAR_APP_USER";

export const saveUser = (user: UserData): void => {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const getUser = (): UserData | undefined => {
  const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return user ? JSON.parse(user) : undefined;
};

export const getToken = (): UserData | undefined => {
  try {
    const v = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
    const user = JSON.parse(v);

    console.log('aaa')
    console.log(user)
    return user?.token;
  } catch {
    return undefined;
  }
};

export const removeUser = (): void => {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
};
