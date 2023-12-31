import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { QUERY_KEY } from "../constants/queryKeys";
import * as userLocalStorage from "./localStorage";
import { getList } from "../api/api";

export interface User {
  token: string;
  username: string;
}

interface IUseUser {
  user: User | null;
}

export function useUser(): IUseUser {
  const { data: user } = useQuery<User | null>(
    [QUERY_KEY.user],

    async (): Promise<User | null> => {
      await getList();
      return userLocalStorage.getUser() || null;
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: userLocalStorage.getUser(),
      onError: () => {
        userLocalStorage.removeUser();
      },
    },
  );

  useEffect(() => {
    if (!user) {
      userLocalStorage.removeUser();
    }
  }, [user]);

  return {
    user: user ?? null,
  };
}
