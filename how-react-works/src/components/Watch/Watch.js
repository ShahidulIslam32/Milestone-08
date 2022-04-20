import React, { useState } from 'react';

const Watch = (props) => {
    const [increase , setIncrease] = useState(0)
    const increaseNumber = () => {
        let newCount = increase + 1
        setIncrease(newCount)
    }
    return (
        <div>
            <h1>this is my smart watch</h1>
            <h2>My Current Steps : {increase}</h2>
            <button onClick={increaseNumber}>De Dour................ </button>
        </div>
    );
};

export default Watch;