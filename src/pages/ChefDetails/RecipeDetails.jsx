import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';

const RecipeDetails = ({ recipe }) => {
    // console.log(recipe);
    const { recipe_picture, recipe_name, rating, instructions, ingredients } = recipe;
    const [fav, setFav] = useState(false);
    const handleFavBtn = () => {
        setFav(true)
        toast.success("Recipe Favorite")
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={recipe_picture} alt="Shoes" /></figure>
            <div className="card-body">
               <div className='flex justify-between'> 
               <h2 className="card-title">{recipe_name} <button onClick={handleFavBtn} disabled={fav ? true : false} ><FaRegHeart className={`${fav && 'text-red-700'}`} /></button> </h2>
               <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                />
               </div>
               
                <p className="card-title">Ingredients</p>
                <ul>
               
                    {
                        ingredients.map((ingts, index) => <li key={index}>{index + 1}. {ingts}</li>)
                    }
                </ul>

               

                <ul>
                    <p className="card-title">Cooking Method</p>
                    {
                        instructions.map((ins, index) => <li key={index}>{ins}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default RecipeDetails;