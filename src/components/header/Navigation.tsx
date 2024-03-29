import { createClient } from '@/prismicio';
import { docResolver } from '@/utils/prismic';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import { isFilled } from '@prismicio/client';
import BlackVariation from './BlackVariation';

export default async function Navigation() {
  const client = createClient();
  const header = await client.getByUID('navigation', 'header');
  const slices = header.data.slices[0]?.items ?? [];
  const { company_name, company_logo, button_text, button_link } = header.data.slices[0]?.primary ?? {};
  const button_icon :any = header.data.slices[0]?.primary.button_icon ?? {}
  const bg_color = header.data.bg_color ? header.data.bg_color : '#fff';
  const variation = header.data.slices[0]?.variation


    switch (variation) {
    case 'blackVariation':
      return (
        <BlackVariation
        
        slices = {slices}
        bg_color = {bg_color}
        company_name = {company_name}
        company_logo = {company_logo}
        button_text = {button_text}
        button_link = {button_link}
        button_icon = {button_icon}
        />
      );
    default:
      return (
        <div
          className={`fixed container top-5 right-1/2 translate-x-1/2 z-10 py-2 w-[90%] backdrop-filter backdrop-blur-2xl mx-auto rounded-full`}
          style={{ backgroundColor: `${bg_color}` }}>
          <div className="w-full">
            <nav className="relative flex items-center justify-between">
              <div className="flex items-center justify-between w-full">
                <Link href="/">
                  {/* Logo  */}
                  <span className="flex items-center space-x-2 text-2xl font-medium">
                    {isFilled.image(company_logo) && (
                      <Image
                        src={company_logo.url}
                        alt="N"
                        width={company_logo.dimensions?.width}
                        height={company_logo.dimensions?.height}
                        className="w-20 xl:w-28"
                      />
                    )}
                    <span>
                      {isFilled.keyText(company_name) ? company_name : ''}
                    </span>
                  </span>
                </Link>
                <div className="flex gap-4 flex-nowrap row">
                  {slices.map((item, index) => (
                    <Link
                      key={index}
                      href={docResolver(item.link)}
                      className="flex w-full py-2 text-gray-600 rounded-md text-nowrap flex-nowrap hover:text-indigo-500">
                      {item.name}
                    </Link>
                  ))}
                  <h4 className="flex w-full py-2 text-gray-600 rounded-md text-nowrap flex-nowrap hover:text-indigo-500">
                    Let&apos;s Connect
                  </h4>
                  {/* <div className="hidden px-4 py-2 text-lg font-medium text-center bg-indigo-600 rounded-full xl:flex">
                    <h4 className="text-[#FFF5EA] text-sm text-nowrap">
                      Contact Us
                    </h4>
                  </div> */}
                </div>
              </div>
            </nav>
          </div>
          {/* make navbar in mobile version */}
        </div>
      );
  }

}

export function HamburgerMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      fill="none"
      viewBox="0 0 24 24"
      // className='w-24'
    >
      <path
        stroke="#F1F5F9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}
export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#F4F4F5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}
