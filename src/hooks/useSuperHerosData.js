import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeroes = async () => {
  const { data } = await axios.get("http://localhost:4000/superheroes");
  return data;
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data.map((hero) => hero.name);
        return superHeroNames;
      },
    }
  );
};
