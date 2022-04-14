import React from 'react';
import NewCarousel from '../../newcarousel/NewCarousel';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <NewCarousel /> <br />
            <Services /> <br />
            <div id='newcarosel'>
                <NewCarousel />
            </div>
        </div>
    );
};

export default Home;