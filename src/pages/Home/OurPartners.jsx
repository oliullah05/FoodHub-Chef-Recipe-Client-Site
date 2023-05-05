import React from 'react';
import join from "../../assets/img_1.png"


const OurPartners = () => {
    return (
       <section  className='md:flex flex-row-reverse md:flex-row gap-5 justify-center items-center bg-slate-200 shadow-lg rounded-lg container mx-auto'>

<div className='text-center md:text-left'>
<p className='text-blue-900'>Join Our Community Forum </p>
<h1 className='text-5xl py-5 font-bold'>Let's start sharing <br /> your awesome <br /> recipes</h1>
<button className="btn btn-warning mt-5 w-44">Join Now</button>
</div>

<div>
<img src={join} alt="" />
</div>
       </section>
    );
};

export default OurPartners;