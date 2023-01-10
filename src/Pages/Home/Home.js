import React from 'react';
import AdvancedAndguide from '../../components/AdvancedAndguide/AdvancedAndguide';
import Banner from '../../components/Banner/Banner';
import DedicatedMission from '../../components/DedicatedMission/DedicatedMission';
import Navbar from '../../components/Navbar/Navbar';
import Pricing from '../../components/Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <DedicatedMission/>
            <AdvancedAndguide/>
            <Pricing/>
        </div>
    );
};

export default Home;