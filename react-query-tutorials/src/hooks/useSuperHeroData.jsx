import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroData = (onSuccess, onError) => {
  //cache time default is 5 minutes
  // state time default is 0
  // refetchInterval default is false
  return useQuery("super-heroes", fetchSuperHeroes, {
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
  });
};
