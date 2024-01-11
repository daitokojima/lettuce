import Image from "next/image";

export default function Sns() {
  return (
    <div>
      <div className="md:flex py-28 md:px-10">
        <div className="flex w-full md:w-[50%]">
          <div className="w-[50%]">
            <Image
              src={"/img/green-leaf-plants.png"}
              alt="sns1"
              height={280}
              width={187}
              layout="responsive"
            ></Image>
          </div>
          <div className="w-[50%]">
            <Image
              src={"/img/woman-planting-plant-in-pot.png"}
              alt="sns2"
              height={280}
              width={187}
              layout="responsive"
            ></Image>
          </div>
        </div>
        <div className="pt-8 px-7 md:w-[50%]">
          <p className="text-[#00ab84] text-base font-bold pb-2">
            We Help Gardens Thrive!
          </p>
          <h2 className="text-3xl font-bold leading-10 pb-2">
            Nonummy Cum Convallis
          </h2>
          <p className="pb-8">
            Elementum tristique mi montes nibh deserunt magna. Netus assumenda
            molestias nisi porro, nascetur molas. Habitant urna fugiat wisi
            nceptos sodales magna.&nbsp;Molestie suspendisse faucibus justo!
            Sollicitudin tempore unde, dolorem, blanditiis a nam beatae nihil
            bibendum, taciti.
          </p>
          <div className="w-4 pb-2">
            <Image
              src={"/img/left-quotes-green-double-quotation-marks-21315.svg"}
              alt="sns2"
              height={16}
              width={16}
              layout="responsive"
            ></Image>
          </div>
          <p className="text-base font-bold leading-5 pb-5">
            Tempore ut mauris aenean cillum ultrices nunc aliqu auris aenean
            mpore utma.
          </p>
          <div className="w-20 pb-3">
            <Image
              src={"/img/pic55-free-img.png"}
              alt="sns2"
              height={74}
              width={74}
              layout="responsive"
            ></Image>
          </div>
          <div className="flex gap-3 mb-14">
            <a className="w-8 hover:opacity-70">
              <Image
                src={"/img/facebook.svg"}
                alt="sns2"
                height={32}
                width={32}
                layout="responsive"
              ></Image>
            </a>
            <a className="w-8 hover:opacity-70">
              <Image
                src={"/img/twitter.svg"}
                alt="sns2"
                height={32}
                width={32}
                layout="responsive"
              ></Image>
            </a>
            <a className="w-8 hover:opacity-70">
              <Image
                src={"/img/youtube.svg"}
                alt="sns2"
                height={32}
                width={32}
                layout="responsive"
              ></Image>
            </a>
            <a className="w-8 hover:opacity-70">
              <Image
                src={"/img/instagram.svg"}
                alt="sns2"
                height={32}
                width={32}
                layout="responsive"
              ></Image>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:px-10">
        <div className="w-full md:-z-10">
          <div className="md:h-[22.5rem]">
          <Image
            src={"/img/plants-care.png"}
            alt="sns2"
            height={416}
            width={680}
            layout="responsive"
          ></Image>
          </div>
          <div className="absolute flex-col mx-auto -mt-36 px-8 text-white">
            <h3 className="text-2xl font-bold pb-3">Plants Care Instruction</h3>
            <p className="text-sm pb-7">
              Each order includes a small care guide booklet.
            </p>
            <a className="hover:text-green-900 duration-200">Shop Now →</a>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={"/img/leaves.png"}
            alt="sns2"
            height={416}
            width={680}
            layout="responsive"
          ></Image>
          <div className="absolute flex-col mx-auto -mt-36 px-8 text-white">
            <h3 className="text-2xl font-bold pb-3">Plants Care Instruction</h3>
            <p className="text-sm pb-7">
              Each order includes a small care guide booklet.
            </p>
            <a className="hover:text-green-900 duration-200">Shop Now →</a>
          </div>
        </div>
      </div>
      <div className="bg-[#fff0db] pt-16 px-6 pb-52 flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-10 mb-5">
          Buy Online Now & Get 10% Off!
        </h2>
        <p className="text-base font-extralight mb-10">
          Curae quia enim aute, consequatur, eius quaerat excepteur fames
          pharetra.
        </p>
        <div className="w-32 h-12 bg-green-800 border-green-800 text-white flex items-center justify-center mx-auto mb-10 hover:bg-white duration-200 hover:text-black">
          <span className="">Avail Now</span>
        </div>
      </div>
    </div>
  );
}
