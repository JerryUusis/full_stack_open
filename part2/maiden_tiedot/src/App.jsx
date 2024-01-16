import axios from "axios";
import Countries from "./components/Countries";
import { useState, useEffect } from "react"


function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState(null);

  useEffect(() => {

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setCountries(response.data)
      })
  }, [search])


  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filterCountries = (array, filterValue) => {
    return array.filter((item) => item.name.common.toLowerCase().includes(filterValue.toLowerCase()))
  }

  return (
    <>
      <p>Find countries</p>
      <input type="text" onChange={handleSearch} />
      <Countries countries={countries} search={search} filterCountries={filterCountries}/>
    </>
  )
}

export default App
