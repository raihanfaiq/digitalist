import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';
import { articleBanner } from '../../../public/images';
import Image from 'next/image';

/**
 * Props for `Porto`.
 */
export type PortoProps = SliceComponentProps<Content.PortoSlice>;

const Porto = ({ slice }: PortoProps): JSX.Element => {
  return (
    <section className="flex justify-center w-full ">
      <div className="flex flex-col items-center w-full max-w-screen-xl gap-8 py-10 mx-5 xl:py-28 md:gap-24 md:mx-20 ">
        <div className="flex flex-col items-start justify-between w-full gap-4 md:items-center md:flex-row ">
          <div className="flex flex-col w-full gap-2 md:gap-4">
            <div className="text-amber-400">
              <PrismicRichText field={slice.primary.title} />
            </div>
            <div className="text-2xl font-bold text-[#FFF5EA] md:text-5xl">
              {slice.primary.lefttitle}
            </div>
          </div>
          <div className="w-full md:max-w-[505px] h-full flex items-center">
            <p className="text-sm text-gray-200 md:text-lg">
              {slice.primary.righttitle}
            </p>
          </div>
        </div>
        <div className="w-full min-h-[632px] flex flex-col xl:flex-row justify-center gap-6 ">
          <div className="flex flex-col justify-between gap-6">
            {slice.items.map((el, index) => (
              <div
                key={index}
                className="h-[409px] w-full xl:w-[705px] xl:h-[301px]">
                <div className="relative flex items-end w-full h-full">
                  {isFilled.image(el.image) && (
                    <Image
                      src={el.image.url}
                      fill
                      style={{ objectFit: 'cover' }}
                      alt="Lalasia"
                    />
                  )}
                  <div className="linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full" />
                  <div className="relative flex flex-col gap-4 p-7">
                    <div className="flex flex-col">
                      <div>
                        <h2 className="text-base font-bold text-[#FFF5EA] md:text-2xl">
                          {el.title}
                        </h2>
                        <p className="text-[#FFF5EA] opacity-[0.7] text-ellipsis text-sm md:text-lg">
                          {el.paragraph}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-[#FFF5EA] text-ellipsis md:text-lg">
                      See Detail
                    </p>
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
