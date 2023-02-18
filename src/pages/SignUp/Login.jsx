import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import loginIcon from '../../assets/images/logo/login.png'
const Login = () => {
    const { signInEmailPassword, SignIn } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const googleProvider = new GoogleAuthProvider();

    const [error, setError] = useState({
        loginError: "",
        googleError: "",
    });

    const onSubmit = data => {
        console.log(data);

        signInEmailPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset()
                toast.success("Successfully login", {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                })
            })
            .catch(err => {
                console.log(err.message);
                setError({ ...error, loginError: err })
            })

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 4000)
        })
        return promise;
    }
    const handleGoogleSignIn = () => {
        console.log("dbajsbhj");
        SignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login With Google success")
            })
            .catch(err => {
                setError({ ...error, googleError: err })
            })
    }
    return (
        <div className='h-screen bg-slate-200 flex flex-col justify-center'>
            <div className='border-2 hover:border-red-600 w-full lg:w-1/4 mx-auto p-2 shadow-2xl rounded-lg bg-slate-200'>
                <div className='flex items-center justify-center space-x-2 my-5'>
                    <h1 className='text-3xl font-bold'>Login</h1>
                    <img src={loginIcon} className="w-10" alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
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
                    <div className='w-full max-w-xs mx-auto pt-5'>
                        <button disabled={isSubmitting} type='submit' className="btn btn-md bg-error grayscale-2 border-0 w-full">Submit</button>
                    </div>
                    {error.loginError && <small role="alert" className='text-red-500 font-semibold'>user not found</small>}
                </form>
                <div className='w-full max-w-xs mx-auto text-center my-2 font-bold'>
                    <span className='text-center'>Don't have any account? <span className='text-orange-700 hover:text-blue-500'><Link to="/signUp">Sign up</Link></span></span>
                    <div className="divider">OR</div>
                    <div className='w-full max-w-xs'>
                        <button onClick={handleGoogleSignIn} className='flex items-center btn btn-outline w-full'><span className='ml-5'>Continue with google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;