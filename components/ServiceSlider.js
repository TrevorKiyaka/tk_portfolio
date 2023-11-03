// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  // RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: "Crafting a strong brand identity that resonates with your audience and sets your business apart. From logo design to brand strategy, we'll help you make a lasting impression.",
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating stunning and user-friendly designs for websites and applications. We focus on aesthetics, usability, and user experience to bring your vision to life.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building custom web and mobile applications tailored to your unique needs. We specialize in front-end and back-end development, using the latest technologies.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: "Crafting compelling and persuasive content that engages your audience. Our copywriters will deliver messaging that communicates your brand's story effectively.",
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: "Optimizing your website for search engines to improve visibility and attract organic traffic. We'll help you climb the search rankings and reach your target audience.",
  },
];

//breakpoints relare to the screens
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
          spaceBetween: 15,
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
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              {/* <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;