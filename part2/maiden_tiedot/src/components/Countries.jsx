const Countries = ({ countries, search, filterCountries }) => {

    if (countries === null) {
        return null
    }

    const filteredCountries = filterCountries(countries, search)

    if (filteredCountries.length > 10) {
        return (
            <div>
                <p>Too many matches. Please specify</p>
            </div>
        )
    }

    if (filteredCountries.length < 10 && filteredCountries.length > 1) {
        return (
            <div>
                {filteredCountries.map((country) => {
                    return <p key={country.name.common}>{country.name.common}</p>
                })}
            </div>
        )
    }

    if (filteredCountries.length === 1) {
        const country = filteredCountries[0];
        const languageKeys = Object.keys(country.languages);
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
                <h2>Languages</h2>
                <ul>
                    {
                        languageKeys.map((shortCode) => {
                            return <li key={shortCode}>{country.languages[shortCode]}</li>
                        })
                    }
                </ul>
                <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
            </div>
        )
    }
}

export default Countries