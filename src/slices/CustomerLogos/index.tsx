import { type Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';

export type CustomerLogosProps =
  SliceComponentProps<Content.CustomerLogosSlice>;

const CustomerLogos = ({ slice }: CustomerLogosProps): JSX.Element => {
  return (
    <section className="container w-full h-full pt-40 xl:pt-48">
      <div className="flex flex-col items-center justify-center gap-20">
        {isFilled.richText(slice.primary.eyebrowHeadline) && (
          <div className="text-4xl font-bold lg:text-6xl">
            <PrismicRichText field={slice.primary.eyebrowHeadline} />
          </div>
        )}
        {slice.items.length > 0 && (
          <ul className="flex flex-row gap-10">
            {slice.items.map(
              (item) =>
                isFilled.image(item.image) && (
                  <li key={item.image.url} className="">
                    <PrismicNextLink field={item.link}>
                      <PrismicNextImage
                        field={item.image}
                        height={120}
                        width={240}
                        className="object-contain"
                      />
                    </PrismicNextLink>
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CustomerLogos;
