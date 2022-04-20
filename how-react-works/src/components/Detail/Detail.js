import React from 'react';

const Detail = (props) => {
    return (
        <div>
            <h2> Rom : {props.rom}</h2>
            <h2>Batery Power : {props.bettery}</h2>
        </div>
    );
};

export default Detail;