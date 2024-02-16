"use client";
import { useState } from "react";
import { Content, isFilled, ImageField } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { articleBanner } from "../../../public/images";
/**
 * Props for `FaqSection`.
 */
export type FaqSectionProps = SliceComponentProps<Content.FaqSectionSlice>;

const FaqSection = ({ slice }: FaqSectionProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = slice.items ? slice.items : [];

  return (
    <section className="container mx-auto px-4" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="flex flex-col xl:flex-row">
        <div className="text-center flex flex-col items-center pb-5 text-4xl font-bold xl:mr-4">
          <PrismicRichText field={slice.primary.title} />
          {isFilled.image(slice.primary.image) && <Image src={slice.primary.image.url} width={500} height={500} style={{ objectFit: "cover" }} alt="Lalasia" />}
        </div>
        <div className="flex-1">
          {faqs.map((item: any, index: number) => (
            <div key={index} className="faq-item border border-gray-300 rounded-md mb-4 flex flex-col">
              <div className={`faq-question px-4 py-2 flex justify-between items-center cursor-pointer ${activeIndex === index ? "bg-gray-200" : ""}`} onClick={() => toggleAccordion(index)}>
                <span>{isFilled.keyText(item.question) ? item.question : ""}</span>
                <span className="icon">{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && <div className="faq-answer p-4 border-t border-gray-300">{isFilled.keyText(item.answer) ? item.answer : ""}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
