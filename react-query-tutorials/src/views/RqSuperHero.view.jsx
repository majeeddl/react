import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";





const RqSuperHeroview = () => {
  const onSuccess = () => {
    console.log("on success");
  };

  const onError = () => {
    console.log("on error");
  };

 
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroData(onSuccess,onError)
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
