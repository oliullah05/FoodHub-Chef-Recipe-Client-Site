import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);

    const navigate = useNavigate()

    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")

    const handleSignIn = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess("User Successfully Logged")
                toast.success("User Successfully Logged")
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess("User Successfully Logged")
                toast.success("User Successfully Logged")
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess("User Successfully Logged")
                toast.success("User Successfully Logged")
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message)
            })
    }

    return (
        <div className="py-6 lg:py-24">
            <div className=" bg-slate-100 rounded-lg shadow-lg mx-auto max-w-sm lg:max-w-xl">
                <form onSubmit={handleSignIn} className="w-full p-8">
            
                    <p className="text-3xl text-blue-600 text-center">Please Login!</p>
                    <div className="mt-4">
                        <label className="block font-bold mb-2">Email Address</label>
                      


                        <input type="email" name="email" placeholder="Type Your Email Here" className="input input-bordered input-primary w-full " required />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block  font-bold mb-2">Password</label>
                            
                        </div>
                     
                        <input type="password" name="password"  placeholder="Type Your Passowrd Here" className="input input-bordered input-primary w-full" required/>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button className="btn btn-active btn-primary w-64" type='submit'>Login</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        
                        <p className="text-sm text-center text-gray-500">Don't have an account? <Link to={"/account/register"} className='underline'>Register</Link></p>
                      
                        <Link className='underline'>forgot password?</Link>
                    </div>

                    <div className='mt-4'>

                    </div>
                    <div className='mt-4'>
                        {
                            error ? <p className="text-sm text-center text-red-600">
                                {error}
                            </p> :
                                <p className="text-sm text-center text-green-500">
                                    {success}
                                </p>
                        }
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3'>
                        <button onClick={handleGoogleSignIn} className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <FaGoogle className='text-black' />
                            <span className="py-3 text-center font-bold text-primary">Login With Google</span>
                        </button>
                        <button onClick={handleGithubSignIn} className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                            <FaGithub className='text-black' />
                            <span className="py-3 text-center text-primary font-bold">Login With Github</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;