import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const singleChefData = useLoaderData();
    const {chef_name, chef_picture, years_of_experience, num_recipes, likes, short_bio, recipes } = singleChefData;
    return (
        <div className='my-container flex flex-col space-y-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <LazyLoad threshold={0.99}><figure><img src={chef_picture} alt="Chef Picture" /></figure></LazyLoad>
                <div className="card-body justify-center pl-44 space-y-6">
                    <h2 className="card-title lg:text-5xl"><span className='text-blue-600'>Name:</span> {chef_name}</h2>
                    <div>
                        <p className='text-xl mb-3'> <span className='font-semibold'>
                        <span className='text-blue-600'>Short Bio: </span></span>{short_bio}</p>
                   
                    <p className='font-semibold text-xl'><span className='text-blue-600'>Likes: </span>{likes}</p>
                    <p className='font-semibold text-xl'><span className='text-blue-600'>Experience: </span>{years_of_experience} years+</p>
                    <p className='font-semibold text-xl'><span className='text-blue-600'>Number of Recipes: </span>{num_recipes}</p></div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto lg:gap-10'>
                {
                    recipes.map((recipe, index) => <RecipeDetails key={index} recipe={recipe} />)
                }
            </div>
        </div>
    );
};

export default ChefDetails;