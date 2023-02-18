import React from 'react';
import { useQuery } from 'react-query';
import ExJobs from './ExJobs';

const ExperienceJob = () => {
    const { data: experienceJob = [], isLoading } = useQuery({
        queryKey: ["experienceJob"],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/experienceJob');
            const data = await res.json();
            return data;
        }
    })

    console.log(experienceJob);
    return (
        <div className='my-5 max-w-5xl mx-auto'>
            <h2 className='text-2xl font-semibold font-sans'>Experience Jobs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    experienceJob.map(jobs => <ExJobs key={jobs._id} jobs={jobs}></ExJobs>)
                }
            </div>
        </div>
    );
};

export default ExperienceJob;