import React from 'react'

const Add = (props) => {
  return (
    <>
        <div className='flex flex-col justify-between px-6 py-6 rounded-xl shadow-lg shadow-slate-400 box-border'>

        <h1 className='  text-xl text-green flex mb-6 '>{props.title}</h1>
        <h1 className=' flex mb-6 text-idk'>{props.caption}</h1>
        <h1 className='  mb-6 text-green font-bold text-lg flex justify-end '>{props.price}<span className='opacity-40 text-sm pl-2 mt-1'>/month</span></h1>
        </div>
    </>
  )
}

export default Add