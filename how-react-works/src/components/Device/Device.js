import React from 'react';
import Detail from '../Detail/Detail';

const Device = (props) => {
    console.log(props);
    return (
        <div>
            <h2>I have : {props.name} Device</h2>
            <h2>Price : {props.price}</h2>
            <h2>Model : {props.model}</h2>
            <h2>Storage : {props.storage}</h2>
            <Detail rom="32GB" bettery="6000 Mah"></Detail>
        </div>
        
    );
};

export default Device;