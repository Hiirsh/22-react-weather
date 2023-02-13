import React from 'react';

const Form = (props) => {
    const APIkey = '3ee0113dd38883a3a0012893ae186c58'
    const getCity = async e => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        if (!city) return
        const forecast = await getForecast(city)
        props.setForecast(forecast)
    }

    async function getForecast(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
        const data = await response.json()
        console.log(data)
        return data
    }

    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' placeholder='City' />
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;