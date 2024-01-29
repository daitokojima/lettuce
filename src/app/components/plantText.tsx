import React from 'react'
import Image from "next/image";

function plantText() {
  return (
    <div>
      <div className="flex mx-auto w-full items-center pt-12 relative">
        <div className='mx-auto flex justify-center items-center gap-4'>
          <div className='md:w-[70px] mr-4'>
            <Image
              src={"/img/forest.svg"}
              alt="icon1"
              height={5}
              width={5}
              layout="responsive"
            />
          </div>
          <div className='flex-col leading-4'>
            <h2 className='font-serif text-2xl font-bold'>High Quality<br /> Plants</h2>
            <br />
            <p className='font-extralight text-xl'>A line about the service<br /> you&apos;ve mentioned above.</p>
          </div>
        </div>
        <div className='mx-auto flex justify-center items-center gap-4'>
          <div className='md:w-[70px] mr-4'>
            <Image
              src={"/img/eda.svg"}
              alt="icon1"
              height={5}
              width={5}
              layout="responsive"
            />
          </div>
          <div className='flex-col leading-4'>
            <h2 className='font-serif text-2xl font-bold'>Wide Plant Range</h2>
            <br />
            <p className='font-extralight text-xl'>A line about the service<br /> you&apos;ve mentioned above.</p>
          </div>
        </div>
        <div className='mx-auto flex justify-center items-center gap-4'>
          <div className='md:w-[70px] mr-4'>
            <Image
              src={"/img/king.svg"}
              alt="icon1"
              height={5}
              width={5}
              layout="responsive"
            />
          </div>
          <div className='flex-col leading-4'>
            <h2 className='font-serif text-2xl font-bold'>Excellent Services</h2>
            <br />
            <p className='font-extralight text-xl'>A line about the service<br /> you&apos;ve mentioned above.</p>
          </div>
        </div>
        <div className='mx-auto flex justify-center items-center gap-4'>
          <div className='md:w-[70px] mr-4'>
            <Image
              src={"/img/van.svg"}
              alt="icon1"
              height={5}
              width={5}
              layout="responsive"
            />
          </div>
          <div className='flex-col leading-4'>
            <h2 className='font-serif text-2xl font-bold'>Fast Delivery</h2>
            <br />
            <p className='font-extralight text-xl'>A line about the service<br /> you&apos;ve mentioned above.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default plantText
