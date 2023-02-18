import { async } from '@firebase/util';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { MoonLoader } from 'react-spinners';
import Jobs from './Jobs';

const FresherJob = () => {
    const { data: fresherJob = [], isLoading } = useQuery({
        queryKey: ['fresherJob'],
        queryFn: async () => {
            const res = await fetch('https://it-job-portal-server.vercel.app/fresherJob');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <MoonLoader></MoonLoader>
    }
    return (
        <div className='my-5 max-w-5xl mx-auto'>
            <h2 className='text-2xl font-semibold font-sans'>Fresher Jobs</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    fresherJob.map(jobs => <Jobs key={jobs._id} jobs={jobs}></Jobs>)
                }
            </div>
        </div>
    );
};

export default FresherJob;