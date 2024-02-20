import {
  ColorField,
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
  theme_color: ColorField;
  fullscreen: boolean;
}

const HeroSimple = ({
  image,
  title,
  description,
  fullscreen,
  theme_color,
}: HeroSimpleProps) => {
  return (
    <section
      className={`container w-full ${fullscreen ? 'h-screen' : 'py-20'} rounded-t-2xl xl:pt-28`}>
      <div className="relative flex">
        <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-col lg:text-center">
          <div className="flex flex-col items-start gap-5 lg:items-center">
            <div className="text-4xl font-bold text-[#FFF5EA] lg:text-6xl xl:leading-tight">
              <PrismicRichText field={title} />
            </div>
            <div className="mt-4 text-xl text-gray-200 lg:w-4/5 lg:text-2xl">
              <PrismicRichText field={description} />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            {isFilled.image(image) && (
              <Image
                src={image.url}
                width={image.dimensions?.width}
                height={image.dimensions?.height}
                style={{ objectFit: 'cover' }}
                alt="Lalasia"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
