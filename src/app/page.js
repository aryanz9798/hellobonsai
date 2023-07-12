"use client";
import Image from 'next/image'
import Header from './components/Header'
import ToggleSwitch from './components/ToggleSwitch'



export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className=' flex justify-center  '>
          <p className=' text-green text-center pt-44 text-6xl font-bold'>Pick the best plan for<br /> your business</p>
        </div>
        <ToggleSwitch />
        <div className='flex  justify-between'>
          <div className='px-10 flex '>
          <p className='text-green'>Starter</p>
          <p>17</p>
          <p className='px-2 text-sm font-light text-neutral-600'>/month</p>
          <button className=' bg-lime-400 text-white rounded-full font-medium text-base px-2 py-2'>Start for free</button>
          </div>
          <div className='px-10'>Professional</div>
          <div className='px-10'>Business</div>
        </div>
      </div>
    </>
  )
}
