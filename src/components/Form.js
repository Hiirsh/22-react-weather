import React from 'react';

const Form = () => {

    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value;
        console.log(city)
    }

    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;