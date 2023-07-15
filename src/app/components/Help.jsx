import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Help = () => {
  return (
    <>
    <div >
        <div className='flex ' >
            <div className='flex justify-center   mt-20  w-[50rem] h-[20rem]'>
            <Image
            src={'/img/63692f696516f97a0a53982b_Group 12657-p-800.png'}
            alt='/'
            width={300}
            height={300}
            />            
            </div>
                  <div className=' flex flex-col '>
                  <div className='flex flex-col justify-between mt-24'>
                      <h1 className='text-green font-bold text-4xl py-2'>
                          Need help? We’ll
                          be right with you
                      </h1>
                      <h1 className=' py-2 text-base font-normal text-green opacity-70'>Our friendly, speedy, Customer Support has all<br/> the answers and is here to help you.</h1>
                      <Link href='/' className=' text-lime-800 text-sm font-bold hover:underline'>Contact us</Link>
                      </div>
                      <div>
                        <h1 className='font-bold text-4xl text-green mt-24'>Quick to set up<br/>
                        Even easier to use</h1>
                        <h1 className='font-normal text-base text-green opacity-70'>You get 7 days to try it for free. And if it's not what<br/> you expected, we guarantee your money back within<br/> the first two weeks.</h1>

                      </div>
                        <div className='flex  w-28  mt-7  rounded-full bg-lime-600 text-center py-2 '> <button className=' text-center py-2 px-2 text-white'>Get started</button>
                        </div>                      
                  </div>
                 
                  
        </div>
            
    </div>
    </>
  )
}

export default Help