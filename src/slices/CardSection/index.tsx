import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import ServiceCard from "@/components/Card/ServiceCard";

/**
 * Props for `CardSection`.
 */
export type CardSectionProps = SliceComponentProps<Content.CardSectionSlice>;

/**
 * Component for "CardSection" Slices.
 */
const CardSection = ({ slice }: CardSectionProps): JSX.Element => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="flex flex-col text-center gap-5 p-5">
          <h1 className="text-black text-2xl md:text-6xl font-bold">
            <PrismicRichText field={slice.primary.title} />
          </h1>
        </div>
        <div className="w-full min-h-[632px] flex flex-col xl:flex-row justify-between gap-6  ">
          <div className="w-full flex justify-between flex-wrap gap-5">
            {slice.items.map((el, index) => (
              <ServiceCard key={index} numeric title={isFilled.keyText(el.title) ? el.title : ""} content={isFilled.keyText(el.content) ? el.content : ""} id={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
