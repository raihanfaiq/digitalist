import {
  ColorField,
  Content,
  ImageField,
  RichTextField,
  isFilled,
  KeyTextField,
  LinkField,
} from '@prismicio/client';
import { Jost } from 'next/font/google';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import Image from 'next/image';
import { articleBanner } from '../../../../public/images';
import {
  PrismicNextImage,
  PrismicNextLink,
  PrismicNextLinkProps,
} from '@prismicio/next';

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="text-5xl font-bold text-center md:text-left md:text-7xl font-jost ">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className="mt-5 text-xl text-center md:text-left md:text-2xl ">
      {children}
    </p>
  ),
};

interface HeroSimpleProps {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
  theme_color: ColorField;
  fullscreen: boolean;
  buttonLink: LinkField;
  buttonText: KeyTextField;
}

const HeroOri = ({
  image,
  title,
  description,
  fullscreen,
  theme_color,
  buttonLink,
  buttonText,
}: HeroSimpleProps) => {
  return (
    <section
      className={`w-full bg-gradient-to-r from-darkBlue-grad via-normalBlue-grad to-lightBlue-grad h-lvh relative`}>
      <div
        className={`container w-full ${fullscreen ? 'h-screen' : 'py-20'} xl:pt-28 h-lvh flex items-center relative`}
        style={{ color: '#FFF5EA' }}>
        <div className="flex justify-center gap-8 md:items-center xl:items-start">
          <div className="flex flex-col items-center w-full pt-14 md:w-1/2 md:items-start">
            <PrismicRichText components={components} field={title} />
            <PrismicRichText components={components} field={description} />
            <PrismicNextLink
              className=" w-fit px-12 py-4 bg-gradient-to-r from-darkBlue-grad from-50% to-blue-950 rounded-xl mt-14 inline-block font-bold tracking-wider hover:brightness-125 hover:rounded-none hover:duration-300 duration-300"
              field={buttonLink}>
              {buttonText}
            </PrismicNextLink>
          </div>
          <div className="hidden w-2/5 md:block">
            <PrismicNextImage
              field={image}
              className="w-full animate-upAndDown "
            />
          </div>
        </div>
        <div className="container w-full h-12 z-1 rounded-[100%] bg-[#FFF5EA] absolute bottom-0 left-0 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default HeroOri;
