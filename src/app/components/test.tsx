// rfce
import React from "react";
import Image from "next/image";

function Test() {
  return (
    <div className="w-full">
      TEST DESU
      <Image
        src={"/img/PC.png"}
        alt="test pc"
        height={130}
        width={140}
        layout="responsive"
      />
    </div>
  );
}

export default Test;
