import React from "react";
import Image from "next/image";
const Trust = () => {
    return (
        <>
            <div className="flex text-green justify-center">
                <p className="text-green text-3xl mt-40">
                    Trusted by 500,000+ business owners
                </p>
            </div>
            <div className=" flex justify-center ">
                <div className=" flex justify-between   mt-44">
                <div className="flex  px-5 ">
                    <Image
                    src={'/img/64ad47362f435960a742f956_Capterra.svg'}
                    alt="/"
                    width={300}
                    height={300}
                    />
                </div>
                <div className=" flex justify-between  items-center border-2 border-gray opacity-80 h-16 "></div>               
                </div>
                
                

            </div>
        </>
    );
};

export default Trust;
