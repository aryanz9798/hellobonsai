import React from "react";
import Image from "next/image";
const Social = () => {
  return (
    <>
      <div className="flex flex-col justify-center ">
        <div className="flex justify-between ">
          <div className="flex flex-row gap-5 px-40 py-8">
            <Image src="/img/linkdin.svg" alt="/" width={50} height={50} />
            <Image src="/img/twitter.svg" alt="/" width={50} height={50} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-5 px-12 ">
              <p className="text-sm font-light text-black opacity-80">
                © Bonsai 2023
              </p>
              <p className="text-sm font-light text-black opacity-80">
                FDIC insured up to $250k
              </p>
            </div>

          </div>
        
        </div>
            <div className="flex text-center justify-center">
              <p className=" py-7  text-sm text-black opacity-80 font-light">©2023 Bonsai Technologies Inc —  FDIC insured up to $250,000. Payments, banking, and issuing services are provided by Stripe Payments Company, Evolve Bank & Trust (Member FDIC), and Celtic Bank (Member FDIC), respectively.<br/> Bonsai is not a law firm, and does not provide legal services, advice, or representation. Some product imagery is for illustrative purposes only and the actual product experience may differ.</p>
            </div>          
      </div>
    </>
  );
};

export default Social;
