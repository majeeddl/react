import React from "react";
import { useGetPokemonByNameQuery } from "../store/pokemon.api";

const Home = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <div>Home</div>

      <div className="mt-5">
        <div>id : {data.id}</div>
        <div>name : {data.name}</div>
        <div>weight : {data.weight}</div>
        <div>height : {data.height}</div>
      </div>
    </>
  );
};

export default Home;
