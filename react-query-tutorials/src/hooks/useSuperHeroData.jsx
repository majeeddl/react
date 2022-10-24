import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroById = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-hero", heroId], () => fetchSuperHeroById(heroId));
};
