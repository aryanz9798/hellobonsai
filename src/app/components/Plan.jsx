import Image from "next/image";

// const plan1Item = [
//     "All Templates",
//     "Unlimited Clients & Projects",
//     "Invoicing & Payments",
//     "Proposal & Contracts",
//     "Scheduling",
//     "Tasks & Time Tracking",
//     "Client CRM",
//     "Forms & Questionnaires",
//     "Expense Tracking",
//     "Up to 5 Project Collaborators",
// ];


const list1 = [
    {id:1,
    string:"All Templates"},    
    {id:2 ,
    string:"Unlimited Clients & Projects"},
    {id:3 ,string:"Invoicing & Payments"},
    {id:4,string:"Proposal & Contracts"},
    {id:5,string:"Scheduling"},
    {id:6,string:"Tasks & Time Tracking"},
    {id:7,string:"Client CRM"},
    {id:8,string:"Forms & Questionnaires"},
    {id:9,string:"Expense Tracking"},
    {id:10 ,string:"Up to 5 Project Collaborators"}];
console.log(list1[0])

   
const Plan = (props) => {
  return (
    <>
      <div className="  flex flex-col px-6 py-6 justify-center items-center rounded-2xl shadow-lg shadow-slate-400 ">
        <h1 className="text-4xl font-bold text-green pb-5">{props.title}</h1>

        <h3 className="text-3xl font-bold text-green ">
          {props.price} <span className="opacity-40 text-sm">/month</span>{" "}
        </h3>

        <button className=" bg-lime-500 px-4 py-2 hover:bg-emerald-700 delay-300 transition-all text-white rounded-2xl mt-4">
          Start for free
        </button>
        <p className="text-sm mt-5 text-idk font-light  ">{props.caption1}</p>
        <p className="text-sm  text-idk font-light  ">{props.caption2}</p>
        <p className="text-sm  text-idk font-light  ">{props.caption3}</p>        
        <div className="border-b-2 border-gray w-44 flex justify-center  py-5"></div>
        <div className="py-2 flex flex-col justify-center">
          {list1.map((item) => {
            return (
              <span className="flex py-2 px-2 flex-row qwdqwd">
                <Image
                  className=""
                  alt="/"
                  src="/img/637637410d31673cc7050386_green check.svg"
                  width={15}
                  height={15}
                />
                <span className="px-2">{item.string}</span>
                <br></br>                 
              </span>
            );
            
          })}    
          
        </div>
        <div className=" bg-lime-500 px-4 py-2 hover:bg-emerald-700 delay-300 transition-all text-white rounded-2xl mt-4">
          <button>Start for free</button>
        </div>
      </div>
    </>
  );
};

export default Plan;
