// import React from 'react'
// import { assets } from '../assets/assets'
// import { Link } from 'react-router-dom'

// function MainBanner() {
//     return (
//         <div className='relative'>
//             <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block' />
//             <img src={assets.main_banner_bg_sm} alt="banner" className='w-full  md:hidden' />
//             <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18
//                  lg:pl-24'>
//                 <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105
//                  leading-tight lg:leading-15 '>Freshness You Can Trust, Saving You will Love!</h1>

//                 <div className='flex items-center mt-6 font-medium'>
//                     <Link to={'/products'} className='group flex items-center gap-2 px-7 md:px-9 py-3
//              bg-green-500/80 hover:bg-green-600/90 transition rounded text-white cursor-pointer '>
//                         Shop now
//                         <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
//                     </Link>

//                     <Link to={'/products'} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer '>
//                         Explore deals
//                         <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MainBanner




import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'

const bannerImages = [
    c1, c2, c3
];

const MainBanner = () => {
    return (
        <div className="mt-6">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2000, // 2 seconds
                    disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                className="rounded-xl shadow-lg"
            >
                {bannerImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-auto md:h-auto  object-cover rounded-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MainBanner;
