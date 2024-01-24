import React from 'react';
import Image from "next/image";

const plantSection = () => {
  return (
    <div className=".container mx-auto flex flex-wrap">
      {/* Cactus */}
      <div className="w-full md:w-1/4">
        <div className="mb-8">
          <Image
            src={"/img/Cactus.jpg"}
            alt="Cactus"
            height={280}
            width={187}
            layout="responsive"
          ></Image>
          <div className="text-center">
            <a href="#"
              className="text-black"
            >
              Cactus
            </a>
          </div>
        </div>
      </div>

      {/* Bonsai */}
      <div className="w-full md:w-1/4">
        <div className="mb-8">
          <Image
            className="w-full h-auto mb-4 object-cover"
            src={"/img/Bonsai.jpg"}
            alt="Bonsai"
            height={280}
            width={187}
            layout="responsive"
          ></Image>
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full"
            >
              Bonsai
            </a>
          </div>
        </div>
      </div>

      {/* Succulent */}
      <div className="w-full md:w-1/4">
        <div className="mb-8">
          <Image
            className="w-full h-auto mb-4 object-cover"
            src={"/img/Succulent.jpg"}
            alt="Succulent"
            height={280}
            width={187}
            layout="responsive"
          ></Image>
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-full"
            >
              Succulent
            </a>
          </div>
        </div>
      </div>

      {/*  Indoor Plants*/}
      <div className="w-full md:w-1/4">
        <div className="mb-8">
          <Image
            className="w-full h-auto mb-4 object-cover"
            src={"/img/IndoorPlants.jpg"}
            alt="IndoorPlants"
            height={280}
            width={187}
            layout="responsive"
          ></Image>
          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-purple-500 text-white py-2 px-4 rounded-full"
            >
              Indoor Plants
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default plantSection;


