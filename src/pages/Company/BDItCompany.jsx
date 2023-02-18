import React from 'react';

const BDItCompany = () => {
    const itCompany = [
        {
            "company": "Nobo IT",
            "logo": "https://i.ibb.co/84rFMRJ/nobo-it.png"
        },
        {
            "logo": "https://i.ibb.co/0tpQbB5/bijit.jpg",
            "company": "BJIT Limited",
        },
        {
            "company": "REVE Systems",
            "logo": "https://i.ibb.co/VCX5m19/reve.jpg"
        }
    ]
    return (
        <div>
            <h1 className='text-2xl font-semibold font-mono text-center mt-10'>Top Bangladeshi IT Company</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 rounded-2xl max-w-5xl mx-auto my-20'>
                {
                    itCompany.map(company => <div className="card w-80 bg-gray-300 shadow-xl">
                        <figure className='w-1/2 mx-auto mt-10'><img className='' src={company.logo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{company.company}</h2>
                            <button className="btn btn-primary">Details</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default BDItCompany;