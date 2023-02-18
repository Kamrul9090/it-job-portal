import React from 'react';
import { useQuery } from 'react-query';
import { MoonLoader } from 'react-spinners';
import ExJobs from './ExJobs';

const ExperienceJob = () => {
    const { data: experienceJob = [], isLoading } = useQuery({
        queryKey: ["experienceJob"],
        queryFn: async () => {
            const res = await fetch('https://it-job-portal-server.vercel.app/experienceJob');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <MoonLoader></MoonLoader>
    }
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