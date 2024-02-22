import Image from 'next/image'
import React from 'react'


const Header = () => {
  return (
    <div className="bg-[url('/img/tree.png')] bg-cover">
      {/* <div>
        <Image src="/img/tree.png" alt="bg tree" width={1920} height={1080} className="fixed z-[-1]" />
      </div> */}
    <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Test ICON</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white">Home</a>
      <a className="mr-5 hover:text-white">Shop</a>
      <a className="mr-5 hover:text-white">About Us</a>
      <a className="mr-5 hover:text-white">Testimonials</a>
    </nav>
    <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">CART
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

<div className="py-40 text-white flex items-center justify-center flex-col tracking-widest">
  <p className="text-base mb-4 font-bold">
  The Boutique Store For Plants!
  </p>
  <h2 className="text-6xl text-center leading-[5rem] font-bold t">
  Everything Is Better <br />With Plants
  </h2>
  <div className="w-32 h-12 bg-green-800 border-green-800 text-white flex items-center justify-center mx-auto mt-10 mb-10 hover:bg-white duration-200 hover:text-black">
          <span className="">Avail Now</span>
        </div>
</div>
</div>
  )
}

export default Header
