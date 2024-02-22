import React from 'react';
import Image from "next/legacy/image";

const plantSection = () => {
  return (
    <div>
      <div className="flex w-full items-center mx-auto pt-12 relative">
        <div className="md:w-[30%] text-center w-full ">
          <div className='hover:scale-110 ease-in duration-500'>
            <a href="#" className="-mb-5">
              <Image
                src={"/img/Cactus.png"}
                alt="Cactus"
                height={80}
                width={100}
                layout="responsive"
              />
            </a>
          </div>
          <a href="#" className="font-serif text-3xl hover:underline decoration-green-600">
            Cactus →
          </a>
        </div>
        <div className="md:w-[30%] text-center w-full ">
          <div className='hover:scale-110 ease-in duration-500'>
            <a href="#" className="-mb-5">
              <Image
                src={"/img/Bonsai.png"}
                alt="Bonsai"
                height={80}
                width={100}
                layout="responsive"
              />
            </a>
          </div>
          <a href="#" className="font-serif text-3xl hover:underline decoration-green-600">
            Bonsai →
          </a>
        </div>
        <div className="md:w-[30%] text-center w-full ">
          <div className='hover:scale-110 ease-in duration-500'>
            <a href="#" className="-mb-5">
              <Image
                src={"/img/Succulent.png"}
                alt="Succulent"
                height={80}
                width={100}
                layout="responsive"
              />
            </a>
          </div>
          <a href="#" className="font-serif text-3xl hover:underline decoration-green-600">
            Succulent →
          </a>
        </div>
        <div className="md:w-[30%] text-center w-full ">
          <div className='hover:scale-110 ease-in duration-500'>
            <a href="#" className="-mb-5">
              <Image
                src={"/img/IndoorPlants.png"}
                alt="Indoor Plants"
                height={80}
                width={100}
                layout="responsive"
              />
            </a>
          </div>
          <a href="#" className="font-serif text-3xl hover:underline decoration-green-600">
            Indoor Plants →
          </a>
        </div>
      </div>
    </div>
  );
};

export default plantSection;


