import {
  ColorField,
  Content,
  ImageField,
  RichTextField,
  isFilled,
  KeyTextField,
  LinkField
} from '@prismicio/client';
import {Jost} from 'next/font/google'
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';
import { articleBanner } from '../../../../public/images';
import { PrismicNextImage, PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';

const components : JSXMapSerializer = {
  heading1 : ({children})=> (
    <h1 className="text-center md:text-left text-7xl font-bold font-jost ">
      {children}
    </h1>
  ),
  paragraph : ({children})=>(
    <p className="text-center md:text-left text-2xl mt-5 ">
      {children}
    </p>
  )
}

interface HeroSimpleProps {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
  theme_color: ColorField;
  fullscreen: boolean;
  buttonLink : LinkField,
  buttonText : KeyTextField
}

const HeroOri = ({
  image,
  title,
  description,
  fullscreen,
  theme_color,
  buttonLink,
  buttonText
}: HeroSimpleProps) => {
  return (
    <section
      className={`container w-full ${fullscreen ? 'h-screen' : 'py-20'} xl:pt-28 bg-gradient-to-r from-darkBlue-grad via-normalBlue-grad to-lightBlue-grad h-lvh flex items-center `}>
      <div className="  flex gap-8 justify-center md:items-center xl:items-start">
        <div className=" pt-14 w-full  md:w-1/2 flex flex-col items-center md:items-start ">
          <PrismicRichText components={components} field={title} />
          <PrismicRichText components={components} field={description} />
          <PrismicNextLink className=' w-fit px-12 py-4 bg-gradient-to-r from-darkBlue-grad from-50% to-blue-950 rounded-xl mt-14 inline-block font-bold tracking-wider hover:brightness-125 hover:rounded-none hover:duration-300 duration-300' field={buttonLink}>{buttonText}</PrismicNextLink>
        </div>
        <div className="w-2/5 hidden md:block">
          <PrismicNextImage field={image} className='animate-upAndDown w-full ' />
        </div>
      </div>
      <div className="w-full h-12 z-1 rounded-[100%] bg-[#FFF5EA] absolute bottom-0 left-0 translate-y-1/2"></div>
    </section>
  );
};

export default HeroOri;
