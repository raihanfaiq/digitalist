import { docResolver } from '@/utils/prismic';
import { Content } from '@prismicio/client';
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
      {/* MOVE TO /COMPONENTS NAVIGATION */}
    </section>
  );
};

export default NavigationItem;
