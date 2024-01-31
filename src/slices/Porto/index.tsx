import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { articleBanner } from "../../../public/images";
import Image from "next/image";

/**
 * Props for `Porto`.
 */
export type PortoProps = SliceComponentProps<Content.PortoSlice>;

const Porto = ({ slice }: PortoProps): JSX.Element => {
  return (
    <section className="w-full flex justify-center ">
      <div className="flex flex-col py-10 xl:py-28 items-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20 ">
        <div className="flex w-full justify-between md:items-center md:flex-row flex-col items-start gap-4 ">
          <div className="flex flex-col md:gap-4 gap-2 w-full">
            <div className="text-amber-400">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="text-black md:text-5xl font-bold text-2xl">{slice.primary.lefttitle}</div>
          </div>
          <div className="w-full md:max-w-[505px] h-full flex items-center">
            <p className="text-zinc-500 text-sm md:text-lg">{slice.primary.righttitle}</p>
          </div>
        </div>
        <div className="w-full min-h-[632px] flex flex-col xl:flex-row justify-center gap-6 ">
          <div className="flex flex-col justify-between gap-6">
            {slice.items.map((el, index) => (
              <div className="h-[409px] w-full xl:w-[705px] xl:h-[301px]">
                <div className="w-full h-full relative flex items-end">
                  {isFilled.image(el.image) && <Image src={el.image.url} fill style={{ objectFit: "cover" }} alt="Lalasia" />}
                  <div className="linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full" />
                  <div className="relative p-7 flex flex-col gap-4">
                    <div className="flex flex-col">
                      <div>
                        <h2 className="text-white font-bold text-base md:text-2xl">{el.title}</h2>
                        <p className="text-white opacity-[0.7] text-ellipsis text-sm md:text-lg">{el.paragraph}</p>
                      </div>
                    </div>
                    <p className="text-white text-ellipsis text-sm md:text-lg">See Detail</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Porto;
