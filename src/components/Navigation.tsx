import { createClient } from '@/prismicio';
import { docResolver } from '@/utils/prismic';

export default async function Navigation() {
  const client = createClient();
  const header = await client.getByUID('navigation', 'header');
  const slices = header.data.slices[0]?.items ?? [];

  return (
    <section className="relative">
      <div className="container flex justify-between">
        <p>navbar</p>
        {slices.map((slice, id) => (
          <a key={id} href={docResolver(slice.link)}>
            {slice.name}
          </a>
        ))}
      </div>
    </section>
  );
}
