import {
  type Content,
  isFilled,
  ImageField,
  LinkField,
  RichTextField,
  KeyTextField,
} from '@prismicio/client';
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

const RowVariation = ({
  image,
  title,
  paragraph,
  buttonLink,
  buttonLabel,
}: RowVariationProps): JSX.Element => {
  return (
    <section
      className={`container flex w-full py-20 rounded-t-2xl xl:pt-28 items-center justify-between text-center`}>
      {/* {title && (
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          <PrismicRichText field={title} />
        </div>
      )} */}

      {title && (
        <div className="mt-3 text-4xl font-bold leading-snug tracking-tight text-[#FFF5EA] lg:leading-tight lg:text-6xl">
          <PrismicRichText field={title} />
        </div>
      )}

      {isFilled.richText(paragraph) && (
        <div className="py-4 text-xl leading-normal text-gray-200 xl:text-2xl">
          <PrismicRichText field={paragraph} />
        </div>
      )}
      {isFilled.link(buttonLink) && (
        <PrismicNextLink
          className="px-8 my-8 py-4 text-lg font-medium text-center text-[#FFF5EA] bg-indigo-600 rounded-md"
          field={buttonLink}>
          {buttonLabel || 'Learn more…'}
        </PrismicNextLink>
      )}
    </section>
  );
};

export default RowVariation;
