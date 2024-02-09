import { createClient } from '@/prismicio';
import { docResolver } from '@/utils/prismic';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { isFilled } from '@prismicio/client';

export default async function Navigation() {
  const client = createClient();
  const header = await client.getByUID('navigation', 'header');
  const slices = header.data.slices[0]?.items ?? [];
  const { company_name, company_logo } = header.data.slices[0]?.primary ?? {};
  const bg_color = header.data.bg_color ? header.data.bg_color : '#fff';

  return (
    <div
      className={`sticky top-5 z-10 py-2 w-[90%] mx-auto rounded-full`}
      style={{ backgroundColor: `${bg_color}` }}>
      <div className="w-full">
        <nav className="relative flex items-center justify-between">
          {/* Logo  */}
          <div className="flex items-center justify-between w-full mx-14">
            <Link href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium">
                {isFilled.image(company_logo) && (
                  <Image
                    src={company_logo.url}
                    alt="N"
                    width={company_logo.dimensions?.width}
                    height={company_logo.dimensions?.height}
                    className="w-28"
                  />
                )}
                <span>
                  {isFilled.keyText(company_name) ? company_name : ''}
                </span>
              </span>
            </Link>
            <div className="flex gap-4 row">
              {slices.map((item, index) => (
                <Link
                  key={index}
                  href={docResolver(item.link)}
                  className="w-full py-2 text-gray-600 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
