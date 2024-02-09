import {
  Content,
  ImageField,
  RichTextField,
  isFilled,
} from '@prismicio/client';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';
import { articleBanner } from '../../../../public/images';

interface HeroSimpleProps {
  image: ImageField;
  title: RichTextField;
  description: RichTextField;
}

const HeroSimple = ({ image, title, description }: HeroSimpleProps) => {
  return (
    <section className="w-full h-full">
      <div className="relative flex">
        {isFilled.image(image) && (
          <Image
            src={image.url}
            fill
            style={{ objectFit: 'cover' }}
            alt="Lalasia"
          />
        )}
        <div className="linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full" />
        <div className="relative p-7 md:p-[100px] flex flex-col gap-4">
          <div className="flex flex-col p-10 text-center">
            <div className="p-10">
              <div className="text-base font-bold text-[#FFF5EA] md:text-2xl">
                <PrismicRichText field={title} />
              </div>
              <div className="text-[#FFF5EA] opacity-[0.7] text-ellipsis text-sm md:text-lg">
                <PrismicRichText field={description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
