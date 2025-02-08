import React from "react";
import { useSuperHeroesData } from "../hooks/useSuperHerosData";
import { useFriendsData } from "../hooks/useFriendsData";

export const ParallelQueriesPage = () => {
  const {
    isLoading: superHerosLoading,
    data: superHerosData,
    error: superHerosError,
    isError: issuperHerosError,
  } = useSuperHeroesData();
  const {
    isLoading: friendsLoading,
    data: friendsData,
    error: friendsError,
    isError: isFriendsError,
  } = useFriendsData();
  if (superHerosLoading || friendsLoading) {
    return <h2>Loading...</h2>;
  }

  if (issuperHerosError || isFriendsError) {
    return <div>{superHerosError.message || friendsError.message}</div>;
  }

  return (
    <div>
      {superHerosData?.map((hero) => (
        <div key={hero.id}>
          <h3>
            {hero.name} - {hero.alterEgo}
          </h3>
        </div>
      ))}
      {friendsData?.map((hero) => (
        <div key={hero.id}>
          <h3>
            {hero.name}
          </h3>
        </div>
      ))}
    </div>
  );
};
