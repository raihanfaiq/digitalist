import { type Content, isFilled } from '@prismicio/client';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import RowVariation from './variants/RowVariation';
import DefaultVariation from './variants/DefaultVariation';

export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  const { image, title, paragraph, buttonLink, buttonLabel } = slice.primary;
  switch (slice.variation) {
    case 'alignLeft':
      return (
        <RowVariation
          image={image}
          title={title}
          paragraph={paragraph}
          buttonLink={buttonLink}
          buttonLabel={buttonLabel}
        />
      );

    default:
      return (
        <DefaultVariation
          image={image}
          title={title}
          paragraph={paragraph}
          buttonLink={buttonLink}
          buttonLabel={buttonLabel}
        />
      );
  }
};

export default CallToAction;
