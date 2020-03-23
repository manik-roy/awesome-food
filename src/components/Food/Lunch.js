import React from 'react';
import { Card } from 'react-bootstrap';

const Lunch = (props) => {
    //console.log(props);
    const { name, description, image, price } = props.food;
    return (
        <div className="row">
            <h1>THIS IS LUNCH</h1>
            <div className="col-md-4">
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={image} />
                        <Card.Subtitle className="mb-2">{name}</Card.Subtitle>
                        <Card.Text className="text-muted">
                            {description}
                        </Card.Text>
                        <h4>${price}</h4>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Lunch;