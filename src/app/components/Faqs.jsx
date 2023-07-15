import React from 'react'
import Image from 'next/image'
import { CAccordion, CAccordionItem, CAccordionBody, CAccordionHeader } from '@coreui/react'
const Faqs = () => {
    return (
        <>
        <div className='flex  text-left '>
            <p className=' flex px-36  mt-48  text-green font-bold text-4xl'>Frequently asked questions</p>
        </div>
        <div className='float-right  w-[35rem] h-[50rem] bg-no-repeat bg-cover bg-barg'></div>
        <div className='flex text-center justify-center items-center  w-[55rem] h-[50rem]'>
        <div className='flex '>
        <CAccordion alwaysOpen activeItemKey={2} className='ml-10 space-y-12'  >
        <CAccordionItem itemKey={1}>
          <CAccordionHeader className=' border-b-2 border-gray text-left text-green  font-bold text-2xl '>How does the free trial work?</CAccordionHeader>
          <CAccordionBody className=' text-center text-green font-medium text-base py-3'>
          When you start your trial with Bonsai you'll receive full, unlimited access to the plan you chose. You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the trial ends. You can cancel at any time during the trial period via your Subscriptions settings.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={2}>
          <CAccordionHeader className=' border-b-2 border-gray text-left text-green  font-bold text-2xl'>Can I change my plan anytime?</CAccordionHeader>
          <CAccordionBody className=' text-center text-green font-medium text-base py-3'>
          Yes, you can upgrade, downgrade or cancel your plan at any time via your<br/> Subscription settings.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={3}>
          <CAccordionHeader className=' border-b-2 border-gray text-left text-green  font-bold text-2xl'>Is my Bonsai subscription tax deductible?</CAccordionHeader>
          <CAccordionBody className=' text-center text-green font-medium text-base py-3'>
          Yes, the IRS allows for tax deduction for software you use to run your business. Bonsai's<br/> expense tracking even automatically categorizes your subscription as a deductible<br/> software expense.
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem itemKey={4}>
            <CAccordionHeader className='border-b-2 border-gray text-left text-green  font-bold text-2xl'>What is your refund policy?</CAccordionHeader>
            <CAccordionBody className='text-center text-green font-medium text-base py-3'>
            <strong>We guarantee your money back within the first 14 days of your subscription.</strong> Contact us at support@hellobonsai.com to request your refund.<br/>

            Past those 14 days, you can cancel or modify your subscription <br/> via your Subscription settings to avoid future charges, but refunds will not be issued.
            </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
        </div>
        </div>
        </>
    )
}

export default Faqs