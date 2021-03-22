import './App.css'
import React, { useState, useEffect } from "react";
import LoadingMask from './LoadingMask'
import Hotel from './Hotel';

const App = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `/api/hotels`,
      {
        method: "GET",
      }
    )
      .then(res => res.json())
      .then(response => {
        setData(response)
        setIsLoading(false)
      })
      .catch(error => console.log(error));
      
  }, []);

  console.log(data)

  return (
    <div className="App">

      {isLoading ? <LoadingMask /> : <Hotel data={data} />}

    </div>
  )
}

export default App
