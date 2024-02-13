import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ArticlesHeroSlide from "./Section-slide";

/**
 * Props for `Slider`.
 */
export type SliderProps = SliceComponentProps<Content.SliderSlice>;

/**
 * Component for "Slider" Slices.
 */
const Slider = ({ slice }: SliderProps): JSX.Element => {
  const { title } = slice.primary;
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="flex flex-col text-center gap-5 p-5">
          <div className="text-black text-2xl md:text-6xl font-bold">
            <PrismicRichText field={title} />
          </div>
          <p className="text-textColor text-sm md:text-lg w-full md:w-[600px]">We display products based on the latest products we have, if you want to see our old products please enter the name of the item</p>
        </div>
        <div className="w-full h-[300px] md:h-[500px] xl:h-[720px] p-5">
          <ArticlesHeroSlide />
        </div>
      </div>
    </section>
  );
};

export default Slider;
