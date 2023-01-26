import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import testimonialImg from '../assets/testimonialImg (1).svg';

const Slider = () => {
  return (
    <div className='w-1/2 mt-20'>
    <Carousel className='carousel' autoPlay='true' showStatus={false} showArrows={false} infiniteLoop='true' interval='3000' showThumbs={false}>
    <div className=''>
      <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
      <div className=''>
        <img className='w-10 h-10' src={testimonialImg} alt="" />
        <div className=''>
          <h4 className='text-orange-600 text-sm font-bold'>Harry Wilson</h4>
          <p className='text-xs'>Property Owner</p>
        </div>
      </div>
    </div>
    <div className=''>
      <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
      <div className=''>
        <img className='w-10 h-10' src={testimonialImg} alt="" />
        <div className=''>
          <h4 className='text-orange-600 text-sm font-bold'>Harry Wilson</h4>
          <p className='text-xs'>Property Owner</p>
        </div>
      </div>
    </div>
    <div className=''>
      <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.</p>
      <div className=''>
        <img className='w-10 h-10' src={testimonialImg} alt="" />
        <div className=''>
          <h4 className='text-orange-600 text-sm font-bold'>Harry Wilson</h4>
          <p className='text-xs'>Property Owner</p>
        </div>
      </div>
    </div>
    </Carousel>
  </div>
  )
}

export default Slider
