import { docResolver } from '@/utils/prismic';
import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `NavigationItem`.
 */
export type NavigationItemProps =
  SliceComponentProps<Content.NavigationItemSlice>;

/**
 * Component for "NavigationItem" Slices.
 */
const NavigationItem = ({ slice }: NavigationItemProps): JSX.Element => {
  const slices = slice.items;
  return (
    <section>
     <PrismicNextImage field={slice.primary.company_logo} />
     <>{slice.primary.company_name}</>
     <>{slice.primary.description}</>
    </section>
  );
};

export default NavigationItem;
