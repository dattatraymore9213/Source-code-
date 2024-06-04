import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ViewCirculars = ({ circulars }) => {
    return (
        <ListGroup>
            <ListGroup.Item active>Circulars</ListGroup.Item>
            {circulars.map((circular, index) => (
                <ListGroup.Item key={index}>{circular.title}: {circular.content}</ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default ViewCirculars;
