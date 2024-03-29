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
    <section className="flex justify-center w-full bg-[#13075F]">
      <div className="container flex flex-col items-center w-full gap-8 pt-14 lg:py-24 lg:gap-20">
        <div className="text-[#FFF5EA] text-3xl text-center lg:text-6xl font-bold items-center justify-center flex">
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
