import React from 'react';
import aboutImg from '../../assets/about_img.jpg'
import review_1 from "../../assets/review-1.jpg"
import review_2 from "../../assets/review-2.jpg"
import review_3 from "../../assets/review-3.jpg"

const AboutSection = () => {
    return (
        <section className='bg-cyan-100 container mx-auto'>
          <p className='text-red-800 text-center'><>TESTIMONIAL</></p>
          <h1 className='text-bold text-center text-5xl py-3'>What they say</h1>  
          <p className='text-center italic py-4'>This is very trusted organization and we have services 10 years . Our delivery service <br />
          is really quick and food are very tasty. Our some customers revies here</p>


        <section className='grid grid-col-1 lg:grid-cols-3 gap-3'>
        <div className="card  bg-base-100 shadow-xl my-5">
  <figure><img src={review_1} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur ut similique ipsum incidunt iste rerum commodi quasi cum distinctio. Natus quod corporis similique sequi!</p>
  <h1 className='text-center font-bold mt-6'>Poppy Fancies</h1>
  <p className='text-center '>student</p>
  </div>
</div>


          <div className="card  bg-base-100 shadow-xl my-5">
  <figure><img src={review_2} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur ut similique ipsum incidunt iste rerum commodi quasi cum distinctio. Natus quod corporis similique sequi!</p>
  <h1 className='text-center font-bold mt-6'>Shpoie Clarke</h1>
  <p className='text-center '>banker</p>
  </div>
</div>


          <div className="card  bg-base-100 shadow-xl my-5">
  <figure><img src={review_3} alt="Shoes" /></figure>
  <div className="card-body">
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur ut similique ipsum incidunt iste rerum commodi quasi cum distinctio. Natus quod corporis similique sequi!</p>
  <h1 className='text-center font-bold mt-6'>Eathan marshall</h1>
  <p className='text-center '>student</p>
  </div>
</div>
        </section>




        </section>
    );
};

export default AboutSection;