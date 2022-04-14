import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>We provide : {name}</h3>
            <p>Price : {price}</p>
            <p>{description}</p>
            <Button onClick={() => navigateToServiceDetail(id)} variant="primary">Book : {name}</Button>{' '}

        </div>
    );
};

export default Service;