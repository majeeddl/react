import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RqSuperHeroview = () => {
  const onSuccess = () => {
    console.log("on success");
  };

  const onError = () => {
    console.log("on error");
  };

  //cache time default is 5 minutes
  // state time default is 0
  // refetchInterval default is false
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000,
      // staleTime : 30000
      // refetchOnMount: false,
      // refetchOnWindowFocus: false
      // refetchInterval: 2000,
      // refetchIntervalInBackground: true
      enabled: false,
      onSuccess,
      onError,
      select: (data) => {
        const superHeroNames = data?.data?.map((hero) => hero.name);
        return superHeroNames;
      },
    }
  );

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
      {data?.map((hero) => {
        return <div key={hero}> {hero}</div>;
      })}
    </>
  );
};

export default RqSuperHeroview;
