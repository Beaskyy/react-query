import { useSuperHeroesData } from "../hooks/useSuperHerosData";
import { Link } from "react-router-dom";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching");
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error");
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data?.map((hero) => (
        <div key={hero.id}>
          <Link to={`rq-super-heros/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}

      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
};
