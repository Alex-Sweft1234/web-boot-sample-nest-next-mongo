import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState<any>(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8080/api/constant/get')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <div>
      <h1>Constants</h1>
      <p>{data.NOW}</p>
    </div>
  );
};

export default Home;
