import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../constants/queryKeys";
import { getList } from "../api/api";

export const useServers = () => {
  const { data, error, isLoading } = useQuery([QUERY_KEY.servers], getList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    data: data?.data ?? [],
    isLoading,
    error
  };
}
