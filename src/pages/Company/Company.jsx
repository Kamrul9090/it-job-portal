import React from 'react';
import { Link } from 'react-router-dom';
import company from '../../assets/images/banner/company.jpg'
import company2 from '../../assets/images/banner/company-2.jpg'
const Company = () => {
    return (
        <>
            <h1 className='text-3xl font-semibold font-mono uppercase text-center mt-10  underline decoration-wavy decoration-red-500'>IT Companies</h1>
            <section className='flex justify-around mt-20'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={company} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Top IT Company of Bangladesh</h2>
                        <p>Many people are getting their job at top Bangladeshi IT companies from our website.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error bg-red-600"><Link to='/bdCompany'>See All</Link></button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={company2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Top IT Company of Word Wide</h2>
                        <p>Many people are getting their job at top word wide IT companies from our website.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error bg-red-600"><Link to='/worldWideCompany'>See All</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Company;