import { Content, isFilled } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { title, desc, heroimage } = slice.primary;
  return (
    <section className="relative flex-cc w-full h-[100vh] text-white bg-hero px-[6%]">
      <div className="flex w-full">
        <div className="flex-ss col w-[55%] space-y-4 mt-10">
          <div className="text-primary text-[48px] -lg:text-2xl -md:text-xl font-bold">
            <PrismicRichText
              field={title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-[48px] -lg:text-2xl -md:text-xl font-bold">
                    {children}
                  </h1>
                ),
              }}
            />
          </div>
          <div className="text-primary">
            <PrismicRichText
              field={desc}
              components={{
                paragraph: ({ children }) => (
                  <h2 className="text-[24px] -lg:text-xl -md:text-lg font-sans">
                    {children}
                  </h2>
                ),
              }}
            />
          </div>
          {/* {prismic.isFilled.link(buttonLink) && (
          <PrismicNextLink
            field={buttonLink}
            className="px-5 py-3 font-medium bg-white rounded text-slate-800">
            {buttonText || 'Learn More'}
          </PrismicNextLink>
        )} */}
        </div>
        <div className="w-[45%]">
          {isFilled.image(heroimage) && (
            <Image
              className="object-cover w-full h-full object-center -md:scale-[2] -md:origin-top -md:translate-x-[55%]"
              src={heroimage.url}
              width={heroimage.dimensions?.width}
              height={heroimage.dimensions?.height}
              alt={heroimage.alt || 'Hero image'}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
