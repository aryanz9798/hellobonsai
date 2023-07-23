import react from 'react';


const list1 = ["All Templates",    "Unlimited Clients & Projects",
    "Invoicing & Payments",
    "Proposal & Contracts",
    "Scheduling",
    "Tasks & Time Tracking",
    "Client CRM",
    "Forms & Questionnaires",
    "Expense Tracking",
    "Up to 5 Project Collaborators" ];
    console.log(list1[0])

const list1Items = ({list1}) => {

  return (
    <span>
        {list1.map((x,item) =>(
            <p key={item}>(list1[item])</p>
        ))}
    </span>
  )
}

export default list1