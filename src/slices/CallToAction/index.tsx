import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  const alignment = slice.variation === 'alignLeft' ? 'left' : 'center';

  return (
    <section
      className={`flex w-full flex-col pt-20 ${
        slice.variation === 'alignLeft'
          ? ''
          : 'items-center justify-center text-center'
      }`}>
      {/* {slice.primary.title && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          <PrismicRichText field={slice.primary.title} />
        </div>
      )} */}

      {slice.primary.title && (
        <div className="max-w-2xl mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}

      {isFilled.richText(slice.primary.paragraph) && (
        <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          <PrismicRichText field={slice.primary.paragraph} />
        </div>
      )}
      {isFilled.link(slice.primary.buttonLink) && (
        <PrismicNextLink
          className="bg-[#16745f] px-8 py-4 rounded-md"
          field={slice.primary.buttonLink}>
          {slice.primary.buttonLabel || 'Learn more…'}
        </PrismicNextLink>
      )}
    </section>
  );
};

export default CallToAction;
