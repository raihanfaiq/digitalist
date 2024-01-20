import { createClient } from '@/prismicio';
import { docResolver } from '@/utils/prismic';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';

export default async function Navigation() {
  const client = createClient();
  const header = await client.getByUID('navigation', 'header');
  const slices = header.data.slices[0]?.items ?? [];

  return (
    <section className="relative">
      <div className="w-full">
        <nav className="container relative flex items-center justify-between w-full p-8 mx-auto xl:px-0">
          {/* Logo  */}
          <div className="container flex items-center justify-between w-full">
            <Link href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500">
                <span>
                  {/* <Image
                    src="/img/logo.svg"
                    alt="N"
                    width="32"
                    height="32"
                    className="w-8"
                  /> */}
                  <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1-4a1 1 0 100 2h2a1 1 0 100-2H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span>Digitalist</span>
              </span>
            </Link>
            <div>
              {slices.map((item, index) => (
                <Link
                  key={index}
                  href={docResolver(item.link)}
                  className="w-full px-4 py-2 -ml-4 text-gray-600 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
