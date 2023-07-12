
import React, { useState } from "react";

const ToggleSwitch = () => {
    const [toggle, setToggle] = useState (false);
    return (
        <div className="flex text-center justify-center py-8 ">
            <div
                onClick={() => setToggle(!toggle)}
                className={` flex h-6  w-20 text-center rounded-full border-gray ${toggle ? " justify-start bg-gray" : " justify-end bg-green"
                    }`}
            ><p className=" pr-2 text-white font-medium text-base">monthly</p></div>
            <div
                className={`h-6 w-20 rounded-full ${toggle ? "bg-green" : "bg-gray"}`}
            >
            <p className="pr-2  text-white font-medium text-base">yearly</p>
            
            </div>
        </div>
    );
};

export default ToggleSwitch;
