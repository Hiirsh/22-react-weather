import React from 'react';

const Weather = (props) => {
    return (
        <div>
            <p>Location: {props.forecast.city}</p>
            <p>Temp: {Math.floor(props.forecast.main.temp - 273.15, 1)}</p>
            <p>Pressure: {props.forecast.main.pressure}</p>
            <p>Humidity: {props.forecast.main.humidity}</p>
            <p>Wind: {props.forecast.wind.speed}</p>
        </div>
    );
};

export default Weather;