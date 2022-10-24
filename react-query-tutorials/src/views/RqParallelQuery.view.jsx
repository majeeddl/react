import React from "react";

import { useQuery } from "react-query";

import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
const fetchSuperFriends = () => {
  return axios.get("http://localhost:4000/superfriends");
};

const RqParallelQueryView = () => {
  //use aliases for resolving conflicts
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: superFriends } = useQuery("super-friends", fetchSuperFriends);
  return <div>RqParallelQueryView</div>;
};

export default RqParallelQueryView;
