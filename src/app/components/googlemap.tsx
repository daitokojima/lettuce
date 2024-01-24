import React from "react";
import Image from "next/image";

const Googlemap = () =>{
    return(
      <div className="flex flex-box justify-center">
      <Image
      src={"/img/googlemap.png"}
      alt="map"
      height={1000}
      width={1000}
      className=" overflow-hidden object-cover border-solid transform"
      ></Image>
      </div>
    )
}

export default Googlemap;