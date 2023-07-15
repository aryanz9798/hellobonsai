"use client";
import Image from "next/image";
import Header from "./components/Header";
import ToggleSwitch from "./components/ToggleSwitch";
import Plan from "./components/Plan";
import Add from "./components/Add";
import Faqs from "./components/Faqs";
import Trust from "./components/Trust";
import Quote from "./components/Quote";
import Help from "./components/Help";
import Free from "./components/Free";
import Footer from "./components/Footer";
import Social from "./components/Social";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className=" flex justify-center   ">
          <p className=" text-green text-center pt-44 text-6xl font-bold">
            Pick the best plan for
            <br /> your business
          </p>
        </div>
        <ToggleSwitch />
        <div className="flex flex-row gap-32 justify-center items-center">
          <Plan
            title="plan1"
            price="22"
            caption="plan1 des" />
          <Plan title="plan2" price="22" caption="plan2 des" />
          <Plan title="plan3" price="22" caption="plan3 des" />
        </div>
        <div className=" flex text-center justify-center">
          <p className=" mt-28 text-green font-bold text-3xl">Take it to the<br />
            next level with<br /> add-ons</p>
        </div>
        <div className=" flex  gap-24  justify-center items-center py-9 px-6  ">
        <div className="flex flex-row  justify-center items-center  ">
          <Add
            title="Collaborators"
            caption="Invite other users to specific projects for limited access and functionality."
            price="Free"
          /></div>
        <div className="flex justify-center items-center ">
          <Add
            title="Partners"
            caption="Invite other users to specific projects for limited access and functionality."
            price="9"
          /></div>
        <div className="flex justify-center items-center ">
          <Add
            title="Tax Assistant"
            caption ="Invite other users to specific projects for limited access and functionality."
            price="10"
          /></div>
          </div>
          <Faqs/>
          <Trust/>
          <div className="flex flex-row gap-7 mt-9">
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          /> 
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />  
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />            
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />           
          
          </div>

          <div className="flex flex-row gap-7 px-6 py-6">
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />  
          
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />      
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />            
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />              
          
          </div>
          
          <div className="flex flex-row gap-4 px-6 py-2">
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />  
          
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />      
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />            
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />
          <Quote
          w1="“My best friend"
          w2='in scaling my business”'
          />              
          
          </div>
          <Help/>
          <Free/>
          <Footer/>
          <Social/>
      </div>
    </>
  );
}
