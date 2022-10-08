import React, { useEffect, useState } from 'react'

import axios from "axios"

const SuperHeroview = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <h2>Loading ...</h2>
  }
  return (
    <>
      <h2>
        superHeroview
      </h2>
      <div>
        {data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })}
      </div>
    </>
  )
}

export default SuperHeroview