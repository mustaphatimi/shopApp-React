import React from 'react'

const Features = () => {
  return (
    <section className='px-4 md:px-6  lg:px-8 max-w-[1200px] mx-auto my-14 sm:my-18 md:my-28'>
<div className='flex flex-col sm:flex-row gap-8 '>
    <div className='flex flex-col items-center gap-2'>
        <img className='w-12 h-12' src="https://prismic-io.s3.amazonaws.com/mishmash/4ac3cc5c-52a0-4c88-bc2d-fd57207e93ef_TruckFast.svg" alt="Ship Icon" />
        <h4 className='font-bold'>Ships free and with love</h4>
        <p className='text-center'>Free delivery on all orders over €200 and over €100 for Europe.</p>
    </div>
    <div className='flex flex-col items-center gap-2'>
        <img className='w-12 h-12' src="https://prismic-io.s3.amazonaws.com/mishmash/9706b35d-2bbd-4bbb-8faa-47cf903ca5a6_PiggyBank.svg" alt="Ship Icon" />
        <h4 className='font-bold'>Secure Payment</h4>
        <p className='text-center'>Certified partners and data protection for the best experience possible.</p>
    </div>
    <div className='flex flex-col items-center gap-2'>
        <img className='w-12 h-12' src="https://prismic-io.s3.amazonaws.com/mishmash/e542bfab-eb2d-4a8b-bc40-44c935463f14_Return.svg" alt="Ship Icon" />
        <h4 className='font-bold'>We would love to help you</h4>
        <p className='text-center'>Any questions? Head over to our support. We're here to help.</p>
    </div>
</div>
    </section>
  )
}

export default Features
