// Import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// Import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Crafting unique identities that resonate with your target audience.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating visually stunning designs that captivate and engage your audience.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building robust, scalable, and user-friendly web solutions tailored to you.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizing your online presence to enhance visibility and drive traffic.',
  },
];


const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween:15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div 
              className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>

                {/* Icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>

                {/* Title & Desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>

                {/* Arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight 
                    className='group-hover:rotate-45 group-hover:text-accent translate-all duration-300' />
                </div>

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
