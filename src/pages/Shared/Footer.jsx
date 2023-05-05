import React from 'react';
import logo from "../../assets/logo.png"
import { FaFacebook,FaInstagram,FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{backgroundColor: 'rgb(29, 34, 40)'}}>
            <div className='my-container text-white space-y-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>


                    <div className='space-y-6 px-2 '>
                        <h3 className='font-bold text-3xl'><img className='w-[60%]' src={logo} alt="" /></h3>
                        <p className='text-gray-500'>I provide new recipes with a twist on daily basis. I also post blog posts about fun ideas to do in the kitchen</p>
                    
                     <div className='flex gap-3 items-center'>
                     <FaFacebook style={{width:25,height:25}} ></FaFacebook>
                     <FaTwitterSquare style={{width:25,height:25}}> </FaTwitterSquare>
                     <FaInstagram style={{width:25,height:25}}> </FaInstagram>
                            
                      <FaYoutube style={{width:25,height:25}}></FaYoutube>
                     </div>



                    </div>


                    <div className='space-y-4 pl-5  lg:mx-auto '>
                        <h4 className=' text-3xl'>Recipes</h4>
                        <div className='text-rgb(131,199,242) space-y-3'>
                            <p>Breakfast</p>
                            <p>Desserts</p>
                            <p>Dinner</p>
                            <p>Dairy</p>
                        </div>
                    </div>

                    <div className='space-y-4 pl-5 lg:mx-auto'>
                        <h4 className=' text-3xl'>Legal</h4>
                        <div className='text-rgb(131,199,242) space-y-3'>
                            <p>Privacy Policy</p>
                            <p>Refund Policy</p>
                            <p>Cookie Policy</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-2 justify-between items-center text-gray-500'>
                    <p>© 2023 FoodHub All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;