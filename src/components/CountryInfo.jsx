import React from 'react'
import countries from '../CountryData'
import { useParams } from 'react-router-dom'

function CountryInfo() {

    let {name} = useParams();
    let countryInfo = countries.find(country => country.name ===name )

  return (
    <div>
            <div className="mx-auto w-[700px] mt-24 mb-24 flex items-center gap-15">
                <img className='h-50 w-50 rounded-full object-cover border border-neutral-100' src={countryInfo.flag} alt="country" />
                <div className="">
                    <h1 className='text-2xl font-bold'>{countryInfo.name}</h1>
                    <p className=''>{countryInfo.capital}</p>
                    <p>{countryInfo.languages}</p>
                    <p>{countryInfo.nationalLeader}</p>
                </div>
            </div>
    </div>
  )
}

export default CountryInfo
