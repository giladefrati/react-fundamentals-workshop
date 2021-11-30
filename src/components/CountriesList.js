import { useEffect, useState } from 'react';

export default function CountriesList({ searchValue }) {
  const [data, setData] = useState([])

  //Onmount
  useEffect(() => {
    async function init() {
      //API Calls- request data from the server
      const response = await fetch('https://restcountries.com/v2/all');
      const body = await response.json();
      setData(body);
    }
    init()
  }, [])//dependencies array
  return (
    <div className="countries-container">
      {data
        .filter(country => country.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((country) => {
          const { name, flag } = country;
          return (
            <div key={name} className="country-container">
              <h3 className="title">{name}</h3>
              <img src={flag} height="100px" width="100px" alt="flag" />
            </div>
          )
        })}
    </div>
  )
}