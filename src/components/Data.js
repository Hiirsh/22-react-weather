import React, { useState } from 'react';
import Form from "./Form";
import Weather from "./Weather";

const Data = () => {
    const [forecast, setForecast] = useState()

    return (
        <div>
            <Form setForecast={setForecast} />
            <Weather forecast={forecast} />
        </div>
    );
};

export default Data;