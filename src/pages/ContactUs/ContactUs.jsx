import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import contact from '../../assets/images/banner/contact.png'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const form = useRef();

    const onSubmit = (data) => {
        console.log(data);
        emailjs.sendForm("service_folxwth", 'template_xxxssza', form.current, "mY-pOLwctxtN0D_iJ")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        reset()
    };
    return (
        <div>
            <img src={contact} alt="" srcset="" />
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto mt-20'>
                <div className='p-5'>
                    <h1 className='text-2xl font-semibold mb-5'>Contact Information</h1>
                    <div className=' text-xl text-gray-500 space-y-5'>
                        <p>address: School road, sonaiful bazar, mirpur Dhaka</p>
                        <p>Phone: 0179273738</p>
                        <p>Email: itjobportal@gmail.com</p>
                        <p>Website: www.itjobporat.com</p>
                    </div>
                </div>
                <div className='p-5'>
                    <h1 className='text-2xl font-semibold text-center'>Contact</h1>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col lg:w-2/3 mx-auto'>
                            <label className='text-lg'>Name</label>
                            <input
                                className='py-2 px-1 rounded 
                                border-2'
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className='flex flex-col lg:w-2/3 mx-auto'>
                            <label className='text-lg'>email</label>
                            <input
                                className='py-2 px-1 rounded border-2'
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className='flex flex-col lg:w-2/3 mx-auto'>
                            <label className='text-lg'>Message</label>
                            <textarea type="text" cols="30" rows="10"
                                className='border-2'
                                {...register("name", { required: true })}
                            >

                            </textarea>
                        </div>
                        <button type="submit" className='text-center btn btn-outline bg-red-600 text-white ml-24 mt-5'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;