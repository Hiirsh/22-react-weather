import React from 'react';

const Form = () => {
    const APIkey = '3ee0113dd38883a3a0012893ae186c58'
    const getCity = async e => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        if (!city) return
        const { lat, lon } = await getGeoData(city)
        const forecast = await getForecast(lat, lon)
        console.log(forecast)
    }

    async function getGeoData(city) {
        const response_latlon = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`)
        const data_latlon = await response_latlon.json()
        const { lat, lon } = data_latlon[0]
        return { lat, lon }
    }

    async function getForecast(lat, lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)
        const data = await response.json()
        return data.main
    }

    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' placeholder='City' />
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;