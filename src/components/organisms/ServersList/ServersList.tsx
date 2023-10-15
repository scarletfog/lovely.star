import React, { FC } from "react";
import { useServers } from "auth/useServers";

interface IServersListProps {}

export const ServersList: FC<IServersListProps> = () => {
  const { data, isLoading, error } = useServers();

  return (
    <>
      {isLoading && <div>Loading</div>}
      {!isLoading && error && <div>Unable to fetch data</div>}
      {!isLoading && !error && (
        <div>
          {data.map((serverItem, idx) => (
            <div key={`${idx}-${serverItem.name}`}>
              <p>
                {serverItem.name} - {serverItem.distance}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
