import React from 'react'
import countries from '../CountryData'
import CountryProfile from '../components/CountryProfile'

function Country() {
  return (
        <>
              <h1 className="text-4xl text-center mt-24 font-black">Welcome to Different Country!</h1>
              {
                  countries.map(country => <CountryProfile name={country.name} flag={country.flag} capital={country.capital}/>)
              }
        </>
  )
}

export default Country
