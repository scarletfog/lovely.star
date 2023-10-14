import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../constants/queryKeys";
import { LOGIN_URL } from "../constants/urls";
import { removeUser } from "auth/localStorage";

type IUseSignOut = () => void;

export const useSignOut = (): IUseSignOut => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onSignOut = useCallback(() => {
    queryClient.setQueryData([QUERY_KEY.user], null);

    removeUser();

    navigate(LOGIN_URL);
  }, [navigate, queryClient]);

  return onSignOut;
}
