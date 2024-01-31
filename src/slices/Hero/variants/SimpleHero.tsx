import { Content, ImageField, RichTextField } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';

interface SimpleHeroProps {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
}

const SimpleHero = ({ image, title, description }: SimpleHeroProps) => {
  return (
    <section
      className={`container pt-20 relative flex flex-wrap font-sans bg-white text-gray-900 flex-row-reverse`}>
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <div className="text-4xl font-bold tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            <PrismicRichText field={title} />
          </div>
          <div className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
            <PrismicRichText field={description} />
          </div>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
              href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
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
    </section>
  );
};

export default SimpleHero;
