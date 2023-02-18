import React from 'react';
import Company from '../Company/Company';
import JobCategory from './JobCategory';

const Home = () => {
    return (
        <div className='max-w-5xl mx-auto my-20'>
            <JobCategory></JobCategory>
            <Company></Company>
        </div>
    );
};

export default Home;