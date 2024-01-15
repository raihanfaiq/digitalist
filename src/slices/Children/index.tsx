import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Children`.
 */
export type ChildrenProps = SliceComponentProps<Content.ChildrenSlice>;

/**
 * Component for "Children" Slices.
 */
const Children = ({ slice }: ChildrenProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for children (variation: {slice.variation}) Slices
    </section>
  );
};

export default Children;
