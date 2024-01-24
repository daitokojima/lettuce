import Googlemap from "../components/googlemap";
import React from "react";
import Image from "next/image";



function Footer() {
  return (
    <footer>
      {/* header */}
        <div className="justify-around md px-8 pt-8 md:flex md:pt-16 pb-6">
          <section className="text-center">
            <h2 className="mb-4 text-lg md:text-2xl font-serif">Address</h2>
            <p className="mb-6 md:mb-4 text-sm md:text-base font-extralight ">123Fifth Avenue,USA</p>
          </section>
          <section className="text-center">
            <h2 className="mb-8 text-3xl md:text-5xl font-serif pt-3">Get In Touch</h2>
            <p className="mb-4 text-sm leading-loose md:text-base font-extralight ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br/>ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex gap-3 justify-center mb-2">
              <a href="#"  className="w-8 hover:opacity-70 hover:cursor-pointer">
                <Image
                  src={"/img/facebook.svg"}
                  alt="sns2"
                  height={32}
                  width={32}
                  layout="responsive"
                ></Image>
              </a>
              <a href="#"  className="w-8 hover:opacity-70 hover:cursor-pointer">
                <Image
                  src={"/img/twitter.svg"}
                  alt="sns2"
                  height={32}
                  width={32}
                  layout="responsive"
                ></Image>
              </a>
              <a href="#"  className="w-8 hover:opacity-70 hover:cursor-pointer">
                <Image
                  src={"/img/youtube.svg"}
                  alt="sns2"
                  height={32}
                  width={32}
                  layout="responsive"
                ></Image>
              </a>
              <a href="#"  className="w-8 hover:opacity-70 hover:cursor-pointer">
                <Image
                  src={"/img/instagram.svg"}
                  alt="sns2"
                  height={32}
                  width={32}
                  layout="responsive"
                ></Image>
              </a>
            </div>
            <div>
              <h2 className="mb-4 text-lg md:text-2xl font-serif ">Call Us</h2>
              <p className="mb-4 text-sm md:text-base font-extralight">123-456-7890</p>
            </div>
          </section>
          <section className="text-center">
              <h2 className="mb-4 text-lg md:text-2xl font-serif ">Email Us</h2>
              <p className="mb-4 text-sm md:text-base font-extralight">info@example.com</p>
          </section>
        </div>

      {/* map */}
      <div className="text-white">
        <div className="bg-[url('/img/back-leaf-img.png')] bg-cover">
          <Googlemap />
          <div className="container mx-auto text-gray-300 p-5 flex flex-col md:flex-row items-center justify-between font-light">
            <p className="mb-2 md:mb-0"><small>Copylight</small>&copy;<small> 2024 Plant Shop</small></p>
            <p>Powered by Plant Shop</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;