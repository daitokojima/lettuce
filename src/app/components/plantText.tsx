import React from 'react'
import Image from "next/image";

function plantText() {
    return (
        <div>
            <div className='md:flex'>
                <div className='flex py-10 px-10'>
                  <Image
                      src={"/img/forest.svg"}
                      alt="icon1"
                      height={32}
                      width={32}
                      layout="responsive"
                  ></Image>
                  <h2 className='font-serif pt-3'>High Quality Plants</h2>
                  <p className='font-extralight'>A line about the service<br> you've mentioned above.</br></p>
                </div>
                <div className='flex'>
                  <Image
                     src={"/img/eda.svg"}
                     alt="icon2"
                     height={32}
                     width={32}
                     layout="responsive"
                  ></Image>
                  <h2 className='font-serif pt-3'>Wide Plant Range</h2>
                  <p className='font-extralight'>A line about the service<br> you've mentioned above.</br></p>
                </div>
                <div className='flex'>
                  <Image
                     src={"/img/king.svg"}
                     alt="icon2"
                     height={32}
                     width={32}
                     layout="responsive"
                  ></Image>
                  <h2 className='font-serif pt-3'>Fast Delivery</h2>
                  <p className='font-extralight'>A line about the service<br> you've mentioned above.</br></p>
                </div>
            </div>
        </div>
    )
}

export default plantText
