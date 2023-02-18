import React from 'react';
import FresherJob from './FresherJob/FresherJob';
import JobCategory from './JobCategory';

const Home = () => {
    return (
        <div className='max-w-5xl mx-auto border-2 my-20'>
            <JobCategory></JobCategory>
            <FresherJob></FresherJob>
        </div>
    );
};

export default Home;