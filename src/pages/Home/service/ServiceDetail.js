import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams();

    return (
        <div>
            Service detail : {serviceId}
        </div>
    );
};

export default ServiceDetail;