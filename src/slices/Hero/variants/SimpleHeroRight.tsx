import {
  ColorField,
  Content,
  ImageField,
  RichTextField,
} from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';

interface SimpleHeroProps {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
  theme_color: ColorField;
  fullscreen: boolean;
}

const SimpleHero = ({
  image,
  title,
  description,
  fullscreen,
  theme_color,
}: SimpleHeroProps) => {
  return (
    <section
      className={` ${fullscreen ? 'h-screen' : 'py-20'} relative  bg-[#13075F]`}>
        <div className="container w-full flex lg:flex-row flex-col-reverse">
          <div className="  flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl lg:mb-8">
              <div className="text-4xl font-bold tracking-tight text-[#FFF5EA] lg:text-6xl xl:leading-tight">
                <PrismicRichText field={title} />
              </div>
              <div className="py-5 text-xl leading-normal text-gray-200 lg:text-2xl">
                <PrismicRichText field={description} />
              </div>

              {/* <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                  target="_blank"
                  rel="noopener"
                  className="px-8 py-4 text-lg font-medium text-center text-[#FFF5EA] bg-indigo-600 rounded-md ">
                  Get Started
                </a>
              </div> */}
            </div>
          </div>
          <div className="flex items-center justify-center w-full mb-10 lg:w-1/2 xl:mb-0">
            <div className="">
              {image.url && (
                <Image
                  src={image.url}
                  width="616"
                  height="617"
                  className={'object-cover'}
                  alt="Hero Illustration"
                />
              )}
            </div>
          </div>
        </div>
    </section>
  );
};

export default SimpleHero;
