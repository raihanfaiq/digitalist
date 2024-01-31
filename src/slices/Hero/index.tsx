import { type Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SimpleHero from "./variants/SimpleHero";
import HeroSimple from "./variants/HeroSimple";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  const { image, title, description } = slice.primary;
  switch (slice.variation) {
    case "imageRight":
      return <SimpleHero image={image} title={title} description={description} />;
    case "heroSimple":
      return <HeroSimple image={image} title={title} description={description} />;

    default:
      return <SimpleHero image={image} title={title} description={description} />;
  }
};

export default Hero;
