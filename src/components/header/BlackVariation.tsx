'use client'
import React from 'react'
import { NavigationItemSlice, NavigationItemSliceBlackVariationItem, NavigationItemSliceDefaultItem, Simplify } from '../../../prismicio-types'
import Link from 'next/link'
import { createClient } from '@/prismicio';
import { docResolver } from '@/utils/prismic';
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import { ImageField, LinkField, isFilled } from '@prismicio/client';
import { KeyTextField } from '@prismicio/types';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
// import HamburgerMenu from '';
import { CloseIcon, HamburgerMenu } from './Navigation';
import { useState } from 'react';

interface blackVariationProps {
  slices: Simplify<NavigationItemSliceBlackVariationItem>[];
  bg_color: string;
  company_name?: KeyTextField;
  company_logo?: ImageField<never>;
  button_icon?: ImageField<never>;
  button_text: KeyTextField | undefined;
  button_link: LinkField | undefined;
}

const BlackVariation = ({
      slices,
      bg_color,
      company_name,
      company_logo,
      button_link,
      button_text,
      button_icon
}: blackVariationProps) => {
  let [navbar,setNavbar] = useState(false)
  return (
        <div
          className={`fixed  top-5 right-1/2 translate-x-1/2 z-10 py-2 md:py-5 w-[90%] backdrop-filter mx-auto rounded-2xl`}
          style={{ backgroundColor: `${bg_color}` }}>
              <div className="w-full container ">
                <nav className="flex items-center justify-between w-full ">
                    <Link href="/" className=' h-full shrink-0 md:w-1/4 xl:w-1/3'>
                      {/* Logo  */}
                      <span className="flex items-center space-x-2 text-2xl font-medium">
                        {isFilled.image(company_logo) && (
                          <Image
                            src={company_logo.url}
                            alt="N"
                            width={company_logo.dimensions?.width}
                            height={company_logo.dimensions?.height}
                            className="w-28 xl:w-32"
                          />
                        )}
                      </span>
                    </Link>
                    <div className={`md:flex md:static justify-between grow absolute top-full md:mt-0 mt-3 left-0 w-full rounded-2xl duration-500 origin-top md:scale-y-100 md:opacity-100 ${navbar? 'scale-y-100 opacity-100 ease-[cubic-bezier(.27,.08,.23,1.23)]': 'scale-y-0 ease-[cubic-bezier(.9,-0.21,.5,.68)]'}`}
                    style={{backgroundColor: `${bg_color}`,
                    }}>
                      <div className="md:flex gap-8  xl:gap-16 flex-nowrap row ">
                        {slices.map((item, index) => (
                          <Link
                            key={index}
                            href={docResolver(item.link)}
                            className="flex w-full py-2 text-white  items-center justify-center h-16 md:h-max rounded-md font-semibold font-sen text-nowrap flex-nowrap md:hover:text-indigo-500 hover:backdrop-brightness-125 md:hover:backdrop-brightness-100">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <PrismicNextLink  className='h-full flex gap-2 font-sen bg-gradient-to-r from-normalBlue-grad via-normalBlue-grad to-darkBlue-grad text-white font-bold px-6 py-2 rounded-md hover:brightness-125 hover:rounded-none hover:duration-300 duration-300 w-60 md:w-max md:mx-0 my-5 md:my-0 mx-auto justify-center'  field={button_link}>
                        {button_text}
                        <PrismicNextImage field={button_icon} className='h-full w-6' />
                      </PrismicNextLink>

                    </div>
              
                    <button className='block md:hidden' onClick={()=>setNavbar(!navbar)}>
                        {navbar? (
                          <CloseIcon/>
                        ):(
                          <HamburgerMenu/>
                        )}
                    </button>

                </nav>
              </div>
          {/* make navbar in mobile version */}
        </div>
  )
}



export default BlackVariation