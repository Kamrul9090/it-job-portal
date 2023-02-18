import React from 'react';
import { Link } from 'react-router-dom';

const JobCategory = () => {
    const jobCategory = [
        {
            "job": "Fresher Jobs",
            "des": "We have 200+ fresher jobs available everyday.Choses your job for your career."
        },
        {
            "job": "Experienced Jobs",
            "des": "We have 100+ experience jobs available everyday.Choses your job for your career."
        },
    ]
    return (
        <div>
            <h1 className='text-3xl font-bold text-center font-mono uppercase underline decoration-wavy decoration-red-500'>Job Categories</h1>
            <div className='flex justify-around mt-10'>
                {
                    jobCategory.map(category => <div className="card w-96 bg-error text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{category.job}</h2>
                            <p>{category.des}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-red-700"><Link to='/fresherJob'>See all</Link></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default JobCategory;