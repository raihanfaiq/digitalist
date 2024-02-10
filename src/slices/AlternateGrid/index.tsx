import { PrismicNextImage } from '@prismicio/next';
import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import {
  DetailedReactHTMLElement,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from 'react';
import React from 'react';

export type AlternateGridProps =
  SliceComponentProps<Content.AlternateGridSlice>;

const AlternateGrid = ({ slice }: AlternateGridProps): JSX.Element => {
  const data = slice.primary;
  return (
    <section className="container flex flex-wrap pt-10 lg:pt-20 lg:gap-10 lg:flex-nowrap ">
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          slice.variation === 'imageRight' ? 'lg:order-1' : ''
        }`}>
        <div>
          {isFilled.image(slice.primary.image) && (
            <PrismicNextImage field={data.image} className={'object-cover'} />
          )}
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          slice.variation === 'imageRight' ? 'lg:justify-end' : ''
        }`}>
        <div>
          <div className="flex flex-col w-full mt-4">
            <div className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-[#FFF5EA] lg:leading-tight lg:text-6xl">
              <PrismicRichText field={data.title} />
            </div>

            <div className="max-w-2xl py-4 text-lg leading-normal text-gray-200 lg:text-xl xl:text-xl">
              <PrismicRichText field={data.description} />
            </div>
          </div>

          <div className="w-full mt-5">
            {slice.items.map((item, index) => (
              <div key={index} className="flex items-start mt-8 space-x-3">
                <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                  <svg
                    className="w-6 h-6 text-[#FFF5EA]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1-4a1 1 0 100 2h2a1 1 0 100-2H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-medium text-[#FFF5EA]">
                    <PrismicRichText field={item.title} />
                  </div>
                  <div className="mt-1 text-gray-200">
                    {' '}
                    <PrismicRichText field={item.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternateGrid;

function Benefit(props: any) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          <svg
            className="w-6 h-6 text-[#FFF5EA]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1-4a1 1 0 100 2h2a1 1 0 100-2H8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-medium text-[#FFF5EA]">{props.title}</h4>
          <p className="mt-1">{props.children}</p>
        </div>
      </div>
    </>
  );
}
