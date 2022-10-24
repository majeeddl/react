import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RqSuperHeroView = () => {
  const { heroId } = useParams();

  console.log(heroId);

  const onSuccess = () => {
    console.log("on success");
  };

  const onError = () => {
    console.log("on error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(heroId, onSuccess, onError);

  if (isLoading) {
    return <div> Loading ...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
};

export default RqSuperHeroView;
