import React from "react";
import { Link } from "react-router-dom";

import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const RqSuperHeroesView = () => {
  const onSuccess = () => {
    console.log("on success");
  };

  const onError = () => {
    console.log("on error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  console.log({ isLoading, isFetching });

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2> RQ Super Heroes</h2>
      <button onClick={refetch}> Fetch Data</button>
      {data?.data?.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}> {hero.name}</Link>
          </div>
        );
      })}
    </>
  );
};

export default RqSuperHeroesView;
