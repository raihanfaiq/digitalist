import { createClient } from '@/prismicio';
import { docResolver } from '@/utils/prismic';

export default async function Navigation() {
  const client = createClient();
  const header = await client.getByUID('navigation', 'header');
  const slices = header.data.slices[0]?.items ?? [];

  return (
    <section>
      <div className="navbar">
        <p>navbar</p>
        {slices.map((slice, id) => {
          return (
            <a key={id} href={docResolver(slice.link)}>
              {slice.name}
            </a>
          );
        })}
      </div>
      <style>
        {`
        .navbar {
            display: flex;
            justify-content: space-around;
            background-color: #333;
            padding: 10px;
        }
        .navbar a {
            color: white;
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
}
