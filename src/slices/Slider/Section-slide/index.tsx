'use client';
import React, { FC, CSSProperties, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { SlideArrow } from '@/components/Icons/SlideArrow';
import Image from 'next/image';
import ArticleSlide from './Slide';

interface ArticlesHeroSlideProps {}

const ArticlesHeroSlide: FC<ArticlesHeroSlideProps> = ({}) => {
  const swiperRef = useRef<any>(null);

  // Gunakan tipe CSSProperties untuk properti gaya
  const articleHeroSlideStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    overflowY: 'hidden',
  };

  const articleHeroSlideSlideStyle: CSSProperties = {
    width: '100%',
    position: 'relative',
    overflow: 'visible',
  };

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      style={articleHeroSlideStyle}>
      {Array(3)
        .fill(0)
        .map((el, _i) => (
          <SwiperSlide key={_i} style={articleHeroSlideSlideStyle}>
            <ArticleSlide />
          </SwiperSlide>
        ))}
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="text-[#FFF5EA]  absolute bottom-[50%] top-[50%] z-10 left-12 w-[52px] h-[52px] rounded-full bg-[#15141199] backdrop-blur items-center justify-center hidden md:flex">
        <SlideArrow />
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="text-[#FFF5EA]  absolute bottom-[50%] top-[50%] z-10 right-12 w-[52px] h-[52px] rounded-full bg-[#15141199] backdrop-blur  items-center justify-center hidden md:flex">
        <SlideArrow className="rotate-180 " />
      </button>
    </Swiper>
  );
};

export default ArticlesHeroSlide;
