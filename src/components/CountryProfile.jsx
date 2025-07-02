import React from 'react'
import { Link } from 'react-router-dom'

function CountryProfile({ name, flag, capital }) {
    return (
        <div>
            <Link to={`/${name}`} className='cursor-pointer'>
                <div className="w-[560px] mx-auto flex gap-5 items-center">
                    <img className='h-50 w-50 rounded-full  object-cover mt-5' src={flag} alt="country-img" />
                    <div className="">
                        <h1 className='text-2xl font-bold'>{name}</h1>
                        <h1 className='text-xl font-semibold text-neutral-500'>{capital}</h1>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default CountryProfile
