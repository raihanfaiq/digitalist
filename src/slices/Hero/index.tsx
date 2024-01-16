import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import Image from 'next/image';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`container relative flex font-sans bg-white text-gray-900 ${
        slice.variation === 'imageRight' ? 'flex-row' : 'flex-row-reverse'
      }
  `}>
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            <PrismicRichText field={slice.primary.title} />
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
            <PrismicRichText field={slice.primary.description} />
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center bg-indigo-600 rounded-md ">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          {slice.primary.image.url && (
            <Image
              src={slice.primary.image.url}
              width="616"
              height="617"
              className={'object-cover'}
              alt="Hero Illustration"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
