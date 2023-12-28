import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="font-normal">
      <footer>
        {/* header */}
        <div className="min-h-60">
          <div className="flex justify-around md pt-16 pb-6">
            <section className="">
              <div className="text-center">
                <h2 className="mb-4 text-2xl">Address</h2>
                <p className="mb-4 text-base">123Fifth Avenue,USA</p>
              </div>
            </section>
            <section className="text-center">
              <div>
                <h2 className="mb-8 text-5xl">Get In Touch</h2>
                <p className="mb-4 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br/>ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
              <div className="flex-wrap flex justify-center">
                <a href="#" className="flex flex-col sm:flex-row"><svg xmlns="http://www.w3.org/2000/svg" className="bg-green-400 mr-1 icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></a>
                <a href="#" className="flex flex-col sm:flex-row"><svg xmlns="http://www.w3.org/2000/svg" className="bg-green-400 mx-1 icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></a>
                <a href="#" className="flex flex-col sm:flex-row"><svg xmlns="http://www.w3.org/2000/svg" className="bg-green-400 mx-1 icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg></a>
                <a href="#" className="flex flex-col sm:flex-row"><svg xmlns="http://www.w3.org/2000/svg" className="bg-green-400 ml-1 icon icon-tabler icon-tabler-brand-youtube-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" stroke-width="0" fill="currentColor" /></svg></a>
              </div>
              <div>
                <h2 className="mb-4 text-2xl">Call Us</h2>
                <p className="mb-4 text-base">123-456-7890</p>
              </div>
            </section>
            <section>
              <div className="text-center">
                <h2 className="mb-4 text-2xl">Email Us</h2>
                <p className="mb-4 text-base">info@example.com</p>
              </div>
            </section>
          </div>
        </div>
        {/* <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <Image src={"/img/back-leaf-img.png"} alt="bg-leaf" layout={`fill`} objectFit={`cover`} />
        </div> */}

        <div>
          <div className="fixed h-screen w-screen -z-50">
            <Image
              src={"/img/back-leaf-img.png"}
              alt="葉っぱ"
              className=""
              quality={100}
              sizes="100vw"
              fill
            />
          </div>
          <div>
            <div>地図</div>
          </div>
          <div>
            <div>
              <p>&copy;<small>@2023 Plant Shop</small></p>
              <p>Powered by Plant Shop</p>
            </div>
          </div>
        </div>

        {/* <Image src={"/img/back-leaf-img.png"} alt="bg-leaf" height={80} width={100} /> */}
          
      </footer>
    </div>
  )
}

export default Footer;