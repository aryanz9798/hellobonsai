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
import list1 from "./components/list1";


// const list1 = ["All Templates",    "Unlimited Clients & Projects",
//     "Invoicing & Payments",
//     "Proposal & Contracts",
//     "Scheduling",
//     "Tasks & Time Tracking",
//     "Client CRM",
//     "Forms & Questionnaires",
//     "Expense Tracking",
//     "Up to 5 Project Collaborators", ];
//    {list1.map((list1 ) => (
    
//      <span>{list1}</span>
//    ))}

   {list1.map((x) => {
    return (
      <span className="flex flex-row qwdqwd">
        <Image
          className=""
          alt="/"
          src="/img/637637410d31673cc7050386_green check.svg"
          width={15}
          height={15}
        />
        <p>{list1[x - 1]}</p>
        <br></br>                 
      </span>
    );
    
  })}    


export default function Home(props) {
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
        <div className="flex flex-row gap-32 justify-center items-center ">
          <Plan
            title="starter"
            price="$ 24"
            caption1="Ideal for freelancers and contractors"
            caption2="just starting out."
            caption3="Billed annually."              
            item1=<list1 list1={list1}/>
            // item2="Unlimited Clients & Projects"
            // item3= "Invoicing & Payments"
            // item4="All Templates"
            // item5="Unlimited Clients & Projects"
            // item6= "Invoicing & Payments"
            // item7= "Invoicing & Payments"
            // item8="All Templates"
            // item9="Unlimited Clients & Projects"
            // item10= "Invoicing & Payments"
          />
          <div className="border-8   border-orange-400 rounded-3xl " >
          <p className="text-center   font-normal py-1 text-white border-orange-400  bg-orange-400 px-20 text-sm  ">Best value for money</p>
          <Plan
            title="Professional"
            price="$ 39"
            caption1="Everything a growing independent"
            caption2="business needs to thrive."
            caption3="Billed annually."            
            // item1="Everything in Starter, plus:"
            // item2="Custom Branding"
            // item3="Workflow Automations"
            // item4="Client Portal"
            // item5="Scheduling "
            // item6="Unlimited Scheduling events"
            // item7="QuickBooks Integration"
            // item8="Zapier Integration"
            // item9="Up to 15 Project Collaborators"
            
          /></div>
          <div>

            <Plan
              title="Business"
              price="$ 79"
              caption1="The perfect package for small "
              caption2="businesses and agencies."
              caption3="Billed annually."              
              // item1="Everything in Professional, plus:"
              // item2="Hiring Agreement Templates"
              // // item25="(1099 contractors)"
              // item3="Subcontractor Onboarding"
              // item4="Talent Pool"
              // item5="3 Team Seats"
              // item55="additional seats $9/month"
              // item6="Accountant Access"
              // item7="Connect Multiple Bank Accounts"
              // item8="Unlimited Subcontractors"
              // item9="Unlimited Project Collaborators"
              // item10="Up to 5 Project Collaborators"
            />
          </div>
        </div>

        <div className=" flex text-center justify-center">
          <p className=" mt-28 text-green font-bold text-3xl">
            Take it to the
            <br />
            next level with
            <br /> add-ons
          </p>
        </div>
        <div className=" flex  gap-24  justify-center items-center py-9 px-6  ">
          <div className="flex flex-row  justify-center items-center  ">
            <Add
              title="Collaborators"
              caption="Invite other users to specific projects for limited access and functionality."
              price="Free"
            />
          </div>
          <div className="flex justify-center items-center ">
            <Add
              title="Partners"
              caption="Invite other users to specific projects for limited access and functionality."
              price="9"
            />
          </div>
          <div className="flex justify-center items-center ">
            <Add
              title="Tax Assistant"
              caption="Invite other users to specific projects for limited access and functionality."
              price="10"
            />
          </div>
        </div>
        <Faqs />
        <Trust />
        <div className="flex flex-row gap-7 mt-9">
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
        </div>

        <div className="flex flex-row gap-7 px-6 py-6">
          <Quote w1="“My best friend" w2="in scaling my business”" />

          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
        </div>

        <div className="flex flex-row justify-center items-center gap-4 px-6 py-2">
          <Quote w1="“My best friend" w2="in scaling my business”" />

          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
          <Quote w1="“My best friend" w2="in scaling my business”" />
        </div>
        <Help />

        <Free />
        <Footer />
        <Social />
      </div>
    </>
  );
}
