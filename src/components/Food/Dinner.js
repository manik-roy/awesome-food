import React from 'react';
import { Card } from 'react-bootstrap';

const Dinner = (props) => {
    //console.log(props);
    const { name, description, image, price } = props.food;
    return (
        <div>
            <h1>THIS IS DINNER</h1>
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

export default Dinner;