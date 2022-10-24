import React from "react";
import axios from "axios";

import { useQueries } from "react-query";

const fetchSuperHeroById = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelView = ({ heroIds }) => {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroById(id),
      };
    })
  );

  console.log({queryResult})

  return <div>DynamicParallelView</div>;
};

export default DynamicParallelView;
