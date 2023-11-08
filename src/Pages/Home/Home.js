import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Bar from '../Shared/NavBar/Bar';

const Home = () => {
    return (
        <div>
            {/* <NavBar/> */}
            <Bar/>
            <Banner/>
        </div>
    );
};

export default Home;