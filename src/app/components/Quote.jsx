import React from 'react'

const Quote = (props) => {
  return (
    <>
        
        <div className='  text-base py-2 justify-center  flex flex-col rounded-2xl shadow-lg shadow-slate-400 bg-gray text-center border-gray border '>
        <h1>{props.w1}
        <span className=' text-green font-normal text-base  opacity-70'>{props.w2}</span>
        </h1>
        </div>
    </>
  )
}

export default Quote