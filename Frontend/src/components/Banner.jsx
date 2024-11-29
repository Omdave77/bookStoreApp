import React from 'react'
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 ">
    <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
    <div className='space-y-12'>
    <h1 className='text-4xl font-bold'>Hello! Welcome here to learn something 
        <span className='text-pink-500'> new everyday</span>
    </h1>
    <p className='text-xl'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae aliquid voluptates aperiam voluptas deserunt autem, laboriosam numquam fugit. Recusandae quibusdam esse pariatur vel consequatur nam repellat reprehenderit voluptatem deleniti alias?
    </p>
    <label className="input input-bordered flex items-center gap-2">
      Email
      <input type="text" className="grow" placeholder="daisy@site.com" />
    </label>
    </div>
    <button className="btn btn-secondary mt-6">Get Started</button>

     </div>
    <div className="order-1 w-full md:w-1/2">
    <img src={banner} className="w-150 h-150 px-20 py-20"alt=''/>
    </div>

    </div>
    </>
  )
}

export default Banner