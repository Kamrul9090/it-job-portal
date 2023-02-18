import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import signUpIcon from '../../assets/images/logo/signUp.png'
const SignUp = () => {
    const { createUser, userProfile, SignIn } = useContext(AuthContext)
    const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm();
    const googleProvider = new GoogleAuthProvider();

    const [error, setError] = useState({
        signInError: "",
        googleError: "",
    })
    const onSubmit = data => {
        console.log(data)

        const profile = {
            displayName: `${data.firstName} ${data.lastName}`
        }

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                userProfile(profile)
                    .then(() => {
                        reset();
                        toast.success("Your account successfully created", {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        })

                    })
                    .catch(e => {
                        console.error(e);

                    })
            })
            .catch(e => {
                console.error(e.message)
                setError({ ...error, signInError: e.message })
            })

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 4000)
        })
        return promise;
    };



    const handleGoogleSignIn = () => {
        SignIn(googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='w-100 relative'>
            <div className='w-full lg:w-1/2 absolute lg:left-72 lg:top-5 border-2 rounded-md shadow-2xl shadow-black bg-slate-200'>
                <div className='flex flex-col items-center justify-evenly my-5'>
                    <h1 className='text-xl lg:text-2xl font-bold text-red-600'>Create an account</h1>
                    <img src={signUpIcon} className="w-12 lg:w-20" alt="" />
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        <div className='form-control w-full max-w-xs space-y-1 mx-auto'>
                            <label className="label-text font-semibold">First Name</label>
                            <input type="text" {...register("firstName", { required: true })}
                                aria-invalid={errors.firstName ? "true" : "false"}
                                placeholder="first name" className="input input-sm w-full" />
                            {errors.firstName?.type === 'required' && <small role="alert" className='text-red-500'>First name is required</small>}
                        </div>
                        <div className='form-control w-full max-w-xs space-y-1 mx-auto'>
                            <label className="label-text font-semibold">Last Name</label>
                            <input type="text" {...register("lastName", { required: true })}
                                aria-invalid={errors.lastName ? "true" : "false"}
                                placeholder="last name" className="input input-sm w-full" />
                            {errors.lastName?.type === 'required' && <small role="alert" className="text-red-500">Last name is required</small>}
                        </div>
                        <div className='form-control w-full max-w-xs space-y-1 mx-auto'>
                            <label className="label-text font-semibold">Email</label>
                            <input type="email" {...register("email", { required: "Email name is required" })}
                                aria-invalid={errors.email ? "true" : "false"}
                                placeholder="email" className="input input-sm w-full" />
                            {errors.email && <small role="alert" className='text-red-500'>{errors.email?.message}</small>}
                        </div>
                        <div className='form-control w-full max-w-xs space-y-1 mx-auto'>
                            <label className="label-text font-semibold">Password</label>
                            <input type="password" {...register("password", {
                                required: "This is required", minLength: {
                                    value: 6,
                                    message: "Your password should be at least 6 characters"
                                }
                            })}
                                placeholder="password" className="input input-sm w-full" />
                            {errors.password && <small role="alert" className='text-red-500'>{errors.password?.message}</small>}
                        </div>
                        <div className='form-control w-full max-w-xs space-y-1 mx-auto'>
                            <label className="label-text font-semibold">Confirm Password</label>
                            <input type="password" {...register("confirmPassword",
                                {
                                    required: "This is required",
                                    validate: (val => {
                                        if (watch('password') !== val) {
                                            return "Your password do not match";
                                        }
                                    })
                                }
                            )}
                                placeholder="confirmPassword" className="input input-sm w-full" required />
                            {errors.confirmPassword && <small role="alert" className='text-red-500'>{errors.confirmPassword.message}</small>}
                        </div>
                        <div className='w-full max-w-xs mx-auto pt-5'>
                            <button disabled={isSubmitting} type='submit' className="btn btn-md bg-red-600 grayscale-2 border-0 w-full">Submit</button>
                            {error.signInError && <small role="alert" className='text-red-500 font-semibold'>Already have an account</small>}
                        </div>
                    </form>
                    <div className='w-full max-w-xs mx-auto text-center my-2 font-bold'>
                        <span className='text-center'>Already have an account? <span className='text-orange-700 hover:text-blue-500'><Link to="/login">Login</Link></span></span>
                        <div className="divider">OR</div>
                        <div className='w-full max-w-xs'>
                            <button onClick={handleGoogleSignIn} className='flex items-center btn btn-outline w-full'><span className='ml-5'>Continue with google</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;