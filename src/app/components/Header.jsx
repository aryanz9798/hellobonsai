import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <>
            <div className=" flex justify-between px-12">
                <div className="flex flex-row start space-x-11 py-7  ">
                    <Link className="flex " href="/">
                        <Image
                            className="flex"
                            src={"/img/635b95cfdbc1e264b35486ad_Symbols.svg"}
                            alt="/"
                            height="10"
                            width="100"
                        />
                    </Link>
                    <ul className="flex  space-x-4 tracking-tight font-medium text-base text-center ">
                        <li>Products</li>
                        <li>Industries</li>
                        <li>Templates</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                    <div className=" flex  space-x-4   ">
                        <button>Log in</button>
                        <button className=" bg-lime-600 box-border font-normal text-base rounded-2xl px-4 py-2">Start free</button>
                    </div>
            </div>
        </>
    );
};

export default Header;
