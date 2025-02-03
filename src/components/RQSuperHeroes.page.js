import axios from "axios";
import { useQuery } from "react-query";

const fetcherHeroes = () => {
  return axios("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heros", fetcherHeroes);

  if (isLoading) <h2>Loading...</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
