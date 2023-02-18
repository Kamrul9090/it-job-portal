import React from 'react';
import { Link } from 'react-router-dom';

const JobCategory = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center font-mono uppercase underline decoration-wavy decoration-red-500'>Job Categories</h1>
            <div className='flex justify-around mt-10'>
                <div className="card w-96 bg-error text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Fresher Jobs</h2>
                        <p>We have 200+ fresher jobs available everyday.Choses your job for your career.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-red-700"><Link to='/fresherJob'>See all</Link></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-error text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Fresher Jobs</h2>
                        <p>We have 200+ fresher jobs available everyday.Choses your job for your career.</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-red-700"><Link to='/experienceJob'>See all</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;