import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { QUERY_KEY } from "../constants/queryKeys";
import * as userLocalStorage from "./localStorage";
import { getList } from "../api/api";

export interface User {
  accessToken: string;
  username: string;
}

interface IUseUser {
  user: User | null;
}

export function useUser(): IUseUser {
  // @ts-ignore
  const { data: user } = useQuery<User | null>([QUERY_KEY.user], async (): Promise<User | null> => getList(user), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialData: userLocalStorage.getUser,
    onError: () => {
      userLocalStorage.removeUser();
    },
  });

  useEffect(() => {
    if (!user) userLocalStorage.removeUser();
    else userLocalStorage.saveUser(user);
  }, [user]);

  return {
    user: user ?? null,
  };
}
