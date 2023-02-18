import React from 'react';

const Jobs = ({ jobs }) => {
    const { logo, company, position, location } = jobs;
    return (
        <div className="card w-80 bg-base-200 shadow-xl rounded-2xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Position: {position}</h2>
                <p>Company: {company}</p>
                <p>Location: {location}</p>
                <div className="card-actions">
                    <button className="btn btn-error">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;