import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';
import Slider1 from '../Assets/slider1.jpg'
import Slider2 from '../Assets/slider2.jpg'     
import Slider3 from '../Assets/slider3.jpg'
export default function ShopSlider() {
  return (
    <>
        <Swiper
        navigation={true}
           grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
         loop={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='w-[80%] mx-auto' src={Slider1} alt="" />
      </SwiperSlide>
            <SwiperSlide>
        <img className='w-[80%] mx-auto' src={Slider2} alt="" />
      </SwiperSlide>
            <SwiperSlide>
        <img className='w-[80%] mx-auto' src={Slider3} alt="" />
      </SwiperSlide>
    </Swiper>
    </>
  )
}
