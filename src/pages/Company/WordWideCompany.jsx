import React from 'react';

const WordWideCompany = () => {
    const itCompany = [
        {
            "company": "BASE IT",
            "logo": "https://i.ibb.co/jwGS1VJ/base.jpg"
        },
        {
            "company": "Technobd Limited",
            "logo": "https://i.ibb.co/MMF4qh3/technobd.jpg",
        },
        {
            "company": "Newscred",
            "logo": "https://i.ibb.co/pn5t4wf/newscred.png"
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

export default WordWideCompany;