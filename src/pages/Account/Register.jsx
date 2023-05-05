import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProviders';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserData, googleSignIn, githubSignIn } = useContext(AuthContext);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleRegister = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("")
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoUrl, email, password);

        if (password.length < 6) {
            return setError("Minimum six characters")
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                setSuccess("User Successfully Created")
                toast.success("User Successfully Created")
                updateUserData(name, photoUrl)
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
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message)
            })
    }


    return (
        <div className="py-6 lg:py-24">
            <div className=" bg-slate-100 rounded-lg shadow-lg mx-auto max-w-sm lg:max-w-xl">
                <form onSubmit={handleRegister} className="w-full p-8">
                   
                    <p className="text-3xl text-blue-600 text-center">Create your profile!</p>
                    <div className="mt-4">
                        <label className="block  font-bold mb-2">Your Name</label>

                        {/* <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"  /> */}
                        <input type="text" name="name" placeholder="Type Your Name Here" className="input input-bordered input-primary w-full " required/>
                    </div>
                    <div className="mt-4">
                        <label className="block  font-bold mb-2">Photo URL</label>
                        

                        <input type="url" name="photoUrl" placeholder="Give Your Photo Link Here" className="input input-bordered input-primary w-full " required/>
                        
                    </div>
                    <div className="mt-4">
                        <label className="block  font-bold mb-2">Email Address</label>
                        

                        <input type="email" name="email" placeholder="Give Your Photo Link Here" className="input input-bordered input-primary w-full " required/>
                    </div>
                    <div className="mt-4">
                        <label className="block  font-bold mb-2">Password</label>
                


                        <input type="password" name="password" placeholder="Type Your Password Here" className="input input-bordered input-primary w-full " required/>
                        
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button className=" py-2 px-4  rounded btn btn-active btn-primary w-64" type='submit'>Create Account</button>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                       
                        <p className="text-sm text-center text-gray-500">Already have an account? <Link to={"/account/login"} className='underline'>Login</Link></p>
                      
                       
                    </div>
                    <p className='mt-3'>By signing in to FoodHub, you agree to our <span className='underline'>Terms and Privacy Policy</span>.</p>
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
                            <span className="py-3 text-center  font-bold text-primary">Login With Github</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;