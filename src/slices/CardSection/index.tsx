import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import ServiceCard from '@/components/Card/ServiceCard';

/**
 * Props for `CardSection`.
 */
export type CardSectionProps = SliceComponentProps<Content.CardSectionSlice>;

/**
 * Component for "CardSection" Slices.
 */
const CardSection = ({ slice }: CardSectionProps): JSX.Element => {
  return (
    <section className="container flex justify-center w-full">
      <div className="flex flex-col items-center w-full gap-8 py-24 lg:py-28 lg:gap-24">
        <div className="text-[#FFF5EA] text-4xl w-4/5 text-center lg:text-6xl font-bold items-center justify-center flex">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="grid justify-between w-full grid-cols-1 gap-5 lg:grid-cols-3">
          {slice.items.map((el, index) => (
            <ServiceCard
              key={index}
              numeric
              title={isFilled.keyText(el.title) ? el.title : ''}
              content={isFilled.keyText(el.content) ? el.content : ''}
              id={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
