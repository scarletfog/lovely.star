import { UseMutateFunction, useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "../constants/queryKeys";
import { DASHBOARD_URL } from "../constants/urls";
import { UserData, saveUser } from "../auth/localStorage";

import { loginUser } from "../api/api";

type IUseSignIn = UseMutateFunction<
  UserData,
  unknown,
  {
    username: string;
    password: string;
  },
  unknown
>;

export const useSignIn = (): IUseSignIn => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signInMutation } = useMutation<UserData, unknown, { username: string; password: string }, unknown>(
    ({ username, password }) => loginUser(username, password),
    {
      onSuccess: (data, variables) => {
        queryClient.setQueryData([QUERY_KEY.user], data);

        const saveData = data
        saveData.username = variables.username;

        saveUser(saveData);

        navigate(DASHBOARD_URL);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return signInMutation;
};
