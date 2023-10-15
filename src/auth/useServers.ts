import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../constants/queryKeys";
import { getList } from "../api/api";

import { sortByParams } from "lib/sort";

export const useServers = () => {
  const { data, error, isLoading } = useQuery([QUERY_KEY.servers], getList, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const sortedServers = useMemo(
    () => sortByParams(data?.data || [], ["name", "distance"]),
    [data?.data],
  );

  return {
    data: sortedServers,
    isLoading,
    error,
  };
};
