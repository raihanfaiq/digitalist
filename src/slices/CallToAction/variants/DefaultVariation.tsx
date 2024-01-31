import { type Content, isFilled, ImageField, LinkField, RichTextField, KeyTextField } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
// make props that contain image, title, paragraph, buttonLink, buttonLabel
interface RowVariationProps {
  image: ImageField;
  title: RichTextField;
  paragraph: RichTextField;
  buttonLink: LinkField;
  buttonLabel: KeyTextField;
}


const DefaultVariation = ({ image, title, paragraph, buttonLink, buttonLabel }: RowVariationProps ): JSX.Element => {
  return (
    <section
      className={`flex w-full flex-col pt-20 items-center justify-center text-center`}>
      {/* {title && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          <PrismicRichText field={title} />
        </div>
      )} */}

      {title && (
        <div className="max-w-2xl mt-3 text-xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl">
          <PrismicRichText field={title} />
        </div>
      )}

      {isFilled.richText(paragraph) && (
        <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          <PrismicRichText field={paragraph} />
        </div>
      )}
      {isFilled.link(buttonLink) && (
        <PrismicNextLink
          className="px-8 py-4 mt-10 bg-white rounded-md shadow-lg"
          field={buttonLink}>
          {buttonLabel || 'Learn more…'}
        </PrismicNextLink>
      )}
    </section>
  );
};

export default DefaultVariation;