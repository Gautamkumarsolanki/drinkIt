import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import CardItem from './CardItem'
import Loading from './Loading';

export default function Home() {

  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);


  const callAPI = async (query) => {
    setLoading(true);
    let res;
    if (query !== "") {
      res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`);
    } else {
      res = await fetch('https://api.punkapi.com/v2/beers');
    }
    const data = await res.json();
    setData(data);
    setLoading(false)
  }

  useEffect(() => {
    callAPI(query);
  }, [query])

  return (
    <>
      <NavBar setQuery={setQuery} />
      {
        loading ?
          <Loading />
          :
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px', marginBottom: '20px' }}>
            {data?.length > 0 ? data.map((ele) => {
              return <CardItem key={ele.id} data={ele} />;
            }) : <p>No Results Found</p>
            }
          </div>
      }
    </>
  )
}
