import React from "react";

import { useQuery } from "react-query";

import axios from "axios";

const superHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const superFriends = () => {
  return axios.get("http://localhost:4000/superfriends");
};

export const RqParallelQueryView = () => {
  //use aliases for resolving conflicts
  const { data: superHeroes } = useQuery("super-heroes", superHeroes);
  const { data: superFriends } = useQuery("super-friends", superFriends);
  return <div>RqParallelQueryView</div>;
};
