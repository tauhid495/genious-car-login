import React from 'react';
import NewCarousel from '../../newcarousel/NewCarousel';
import Services from '../services/Services';

const Home = () => {
    return (
        <div className='order-lase'>
            <NewCarousel /> <br />
            <Services /> <br />
            <div id='newcarosel'>
                <NewCarousel />
            </div>
        </div>
    );
};

export default Home;