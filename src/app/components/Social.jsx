import React from 'react'
import Image from 'next/image'
const Social = () => {
  return (
    <>
    
        <div className='flex flex-row gap-5 px-5 py-9'>
            
            <div className='flex ml-11'>
            <Image
            src={'/img/635fe4f6f27b8975b546ae40_Frame 12620.svg'}
            alt='/'
            width={50}
            height={50}
            />            
            </div>
            <div>
            <Image
            className='flex'
            src={'/img/635fe519af5055bb9acb73f3_Frame 12620 (1).svg'}
            alt='/'
            width={50}
            height={50}
            />               
            </div>


        </div>
            <div className=' flex flex-col'>
                <h1 className=' flex-row text-right px-5 -mt-16 text-black opacity-30'>© Bonsai 2023</h1>            
            </div>        
            <div className=' flex flex-col'>
                <h1 className=' flex-row text-right px-52 -mt-16 text-black opacity-30'>FDIC insured up to $250k</h1>            
            </div> 
    </>
  )
}

export default Social