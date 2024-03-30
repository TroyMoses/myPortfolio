// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          link: 'http://troylegacy.vercel.app',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'http://nalongo-lwokyaza-foundation.vercel.app',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'http://usvaswampvolleyball.vercel.app',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'http://ozohengineeringcompany.com',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'http://ozohengineeringcompany.com',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          link: 'http://troylegacy.vercel.app',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'http://nalongo-lwokyaza-foundation.vercel.app',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'http://usvaswampvolleyball.vercel.app',
        },
      ],
    },
  ],
};

// Image
import Image from 'next/image';

// Import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper';

// Icons
import { BsArrowRight } from 'react-icons/bs';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div 
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group' 
                    key={index}
                  >
                    <div 
                      className='flex items-center justify-center relative overflow-hidden group'>
                      {/* Image */}
                      <Link href={image.link}>
                        <Image 
                          src={image.path} 
                          width={500} 
                          height={300} 
                          alt="" 
                        />
                      </Link>
                      {/* Overlay gradient */}
                      <div 
                        className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                      </div>

                      {/* Title */}
                      <div 
                        className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div 
                          className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* Title part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* Title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          {/* Icon */}
                          <div 
                            className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

