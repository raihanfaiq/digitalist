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
      <div className="relative flex pt-20">
        <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
          <div className="text-xl font-bold text-[#FFF5EA] lg:text-6xl">
            <PrismicRichText field={title} />
          </div>
          <div className="w-4/5 mt-4 text-lg text-gray-200 lg:text-xl">
            <PrismicRichText field={description} />
          </div>
          <div className="w-1/2">
            {isFilled.image(image) && (
              <Image
                src={image.url}
                width={image.dimensions?.width}
                height={image.dimensions?.height}
                style={{ objectFit: 'cover', opacity: 0.8 }}
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
