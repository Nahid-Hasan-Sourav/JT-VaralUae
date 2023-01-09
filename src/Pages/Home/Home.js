import React from 'react';
import Banner from '../../components/Banner/Banner';
import DedicatedMission from '../../components/DedicatedMission/DedicatedMission';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DedicatedMission></DedicatedMission>
        </div>
    );
};

export default Home;