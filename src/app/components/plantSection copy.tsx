import React from 'react';
import Image from "next/image";

const plantSection = () => {
  return (
    <div>
      <div className="flex md:mx-auto relative">
        <div className="">
          <a href="#" className="md:w-1/4 hover:scale-110">
           <Image
             src={"/img/Cactus.jpg"}
             alt="Cactus"
             height={300}
             width={298}
             layout="responsive"
            ></Image>
          </a>
          <a href="#" className="text-black hover:border-green-600">
              Cactus →
          </a>
        </div>
        <div className="">
          <a href="#" className="md:w-1/4 hover:scale-110">
          <Image
            src={"/img/Bonsai.jpg"}
            alt="Bonsai"
            height={280}
            width={187}
            layout="responsive"
          ></Image>
          </a>
          <a href="#" className="text-black hover:border-green-600">
              Bonsai →
          </a>
        </div>
        <div className="">
          <a href="#" className="md:w-1/4 hover:scale-110">
          <Image
            src={"/img/Succulent.jpg"}
            alt="Succulent"
            height={280}
            width={187}
            layout="responsive"
          ></Image>
          </a>
          <a href="#" className="text-black hover:border-green-600">
              Succulent →
          </a>
        </div>
        <div className="">
          <a href="#" className="md:w-1/4 hover:scale-110">
          <Image
            src={"/img/IndoorPlants.jpg"}
            alt="IndoorPlants"
            height={280}
            width={187}
            layout="responsive"
          ></Image>
          </a>
          <a href="#" className="text-black hover:border-green-600">
              Indoor Plants →
          </a>
        </div>
      </div>
    </div>
  );
};

export default plantSection;


