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
    <section className="flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-screen-xl gap-8 py-10 mx-5 md:py-28 md:gap-24 md:mx-20 ">
        <div className="flex flex-col gap-5 p-5 text-center">
          <div className="text-[#FFF5EA] text-2xl md:text-6xl font-bold">
            <PrismicRichText field={slice.primary.title} />
          </div>
        </div>
        <div className="w-full min-h-[632px] flex flex-col xl:flex-row justify-between gap-6  ">
          <div className="flex flex-wrap justify-between w-full gap-5">
            {slice.items.map((el, index) => (
              <ServiceCard
                key={index}
                numeric
                title={isFilled.keyText(el.title) ? el.title : ''}
                content={isFilled.keyText(el.content) ? el.content : ''}
                id={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
