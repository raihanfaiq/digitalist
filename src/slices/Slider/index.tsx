import { Content } from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import ArticlesHeroSlide from './Section-slide';

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
    <section className="flex justify-center w-full">
      <div className="flex flex-col items-center w-full max-w-screen-xl gap-8 py-10 mx-5 md:gap-24 md:mx-20 ">
        <div className="flex flex-col gap-5 p-5 text-center">
          <div className="text-[#FFF5EA] text-2xl md:text-6xl font-bold">
            <PrismicRichText field={title} />
          </div>
          <p className="text-gray-200 text-sm md:text-lg w-full md:w-[600px]">
            We display products based on the latest products we have, if you
            want to see our old products please enter the name of the item
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[500px] xl:h-[720px] p-5">
          <ArticlesHeroSlide />
        </div>
      </div>
    </section>
  );
};

export default Slider;
