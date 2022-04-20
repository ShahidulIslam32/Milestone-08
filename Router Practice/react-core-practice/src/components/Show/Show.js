import React from 'react';
import { Card } from 'react-bootstrap';
import './Show.css'

const Show = (props) => {
    console.log(props);
    const { strMeal, strCategory, strArea, strMealThumb, strTags} = props.photo
    return (      
        <div className='food'>
        <Card style={{ width: '18rem', height:'480px', float:'left', margin:'10px' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <h6>Category : {strCategory}</h6>
                <h6>Finding Area : {strArea}</h6>
                <h6>Tage : {strTags?strTags:'No Tags Available For This'}</h6>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Show;


