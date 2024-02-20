import { type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import SimpleHero from './variants/SimpleHero';
import HeroSimple from './variants/HeroSimple';
import SimpleHeroRight from './variants/SimpleHeroRight';

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { image, title, description, theme_color, fullscreen } = slice.primary;
  switch (slice.variation) {
    case 'imageRight':
      return (
        <SimpleHeroRight
          image={image}
          title={title}
          description={description}
          theme_color={theme_color}
          fullscreen={fullscreen}
        />
      );
    case 'heroSimple':
      return (
        <HeroSimple
          image={image}
          title={title}
          description={description}
          theme_color={theme_color}
          fullscreen={fullscreen}
        />
      );

    default:
      return (
        <SimpleHero
          image={image}
          title={title}
          description={description}
          theme_color={theme_color}
          fullscreen={fullscreen}
        />
      );
  }
};

export default Hero;
