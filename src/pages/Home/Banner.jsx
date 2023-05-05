import React, { useContext } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner1 from '../../assets/top-view-table-full-delicious-food-composition.jpg'
import banner2 from '../../assets/nutrition-vegetables-kitchenware.jpg'
import banner3 from '../../assets/douglas-lopez-LlPLQGgYuio-unsplash.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Banner = () => {
    const {user} = useContext(AuthContext)
    return (
        <AwesomeSlider className='lg:h-[80vh]'>
            <div className='relative'>
                <img src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1600" className='bg-cover blur-sm' alt="" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col text-center'>
                    <h1 className='text-4xl w-full lg:font-extrabold tracking-wide text-white lg:leading-tight lg:text-6xl lg:max-w-3xl title-text'>No matter how you cook, <span className='text-blue-700'>FoodHub</span> has many the recipes to surprice you.</h1> 
                    <p className='my-6 text-lg lg:text-2xl  max-w-2/3 md:max-w-xl max-w-2xl text-white'>
                    Savor the Flavors: Your Ultimate Destination for Delicious Cuisine!
                    </p>
                 
                </div>
            </div>
            <div className='relative'>
                <img src="https://images.pexels.com/photos/3338537/pexels-photo-3338537.jpeg?auto=compress&cs=tinysrgb&w=1600" className='bg-cover blur-sm' alt="" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col text-center'>
                <h1 className='text-4xl w-full lg:font-extrabold tracking-wide text-white lg:leading-tight lg:text-6xl lg:max-w-3xl title-text'>No matter how you cook, <span className='text-red-600'>FoodHub</span> has many the recipes to surprice you.</h1> 
                    <p className='my-6 text-lg lg:text-2xl   max-w-2/3 md:max-w-xl max-w-2xl text-white'>
                    Feast Your Senses: Discover a World of Culinary Delights on Our Food Website!
                    </p>
                   
                </div>
            </div>
            <div className='relative'>
                <img src="https://images.pexels.com/photos/3754300/pexels-photo-3754300.jpeg?auto=compress&cs=tinysrgb&w=1600" className='bg-cover blur-sm' alt="" />
                <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col text-center'>
                <h1 className='text-4xl lg:font-extrabold tracking-wide w-full text-white lg:leading-tight lg:text-6xl lg:max-w-3xl title-text'>No matter how you cook, <span className='text-blue-400'>FoodHub</span> has many the recipes to surprice you.</h1> 
                    <p className='my-6 text-lg lg:text-2xl max-w-2/3 md:max-w-xl max-w-2xl text-white'>
                    Discover Delicious Cuisine: Your One-Stop Food Destination!
                    </p>
                    
                </div>
            </div>
        </AwesomeSlider>
    );
};

export default Banner;