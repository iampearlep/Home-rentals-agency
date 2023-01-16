import React from 'react'
import testimonialImg from '../assets/testimonialImg (1).svg';
import contentCard from '../assets/content-card-item-8 (1).svg'

const Testimonials = () => {
return (
  <div className='mt-32 bg-lightOrange'>
    <div className='flex flex-col md:flex-row gap-8 mx-auto'>
      <div className='mx-10 pt-16 md:w-2/3 md:pl-28 md:pt-28'>
        <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
        <div className='flex flex-row gap-4 mt-8'>
          <img className='w-10 h-10' src={testimonialImg} alt="" />
          <div className='flex flex-col gap-0.5'>
            <h4 className='text-orange-600 text-sm font-bold'>Harry Wilson</h4>
            <p className='text-xs'>Property Owner</p>
          </div>
        </div>
        <h2 className='text-gray text-6xl'><span className='text-orange-600'>.</span>..</h2>
      </div>
      <div className='md:w-1/2'>
  <img  src={contentCard} alt="" />
      </div>
    </div>
  </div>
);
}



export default Testimonials