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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <nav>
        <ul>
          <div className="navbar">
          <p>navbar</p>
            {slices.map((slice, id) => (
              <a key={id} href={docResolver(slice.link)}>
                {slice.name}
              </a>
            ))}
          </div>
        </ul>
      </nav>
      <style>
        {`
        .navbar {
            display: flex;
            justify-content: space-around;
            background-color: #333;
            padding: 10px;
        }
        .navbar a {
            text-decoration: none;
            padding: 8px 16px;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .navbar a.active {
            background-color: #04AA6D;
            color: white;
        }
        `}
      </style>
    </section>
  );
};

export default NavigationItem;
