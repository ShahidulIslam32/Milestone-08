import React, { useState } from 'react';
import './Mobile.css'

const Mobile = () => {
    const [down, setDown] = useState(100)
    const lowBattery = () => {
        const decrease = down - 10
        setDown(decrease)
    }
    return (
        <div className='mobile'>
            <h1>Charge Available Now  {down} %</h1>
            <button onClick={lowBattery} className='btn btn-danger mt-3'>Batery Down</button>
        </div>
    );
};

export default Mobile;