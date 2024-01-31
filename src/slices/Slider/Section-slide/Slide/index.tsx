import Image from "next/image";
import React, { FC } from "react";
import { articleBanner, author } from "../../../../../public/images";
interface ArticleSlideProps {}

const ArticleSlide: FC<ArticleSlideProps> = ({}) => {
  return (
    <div className="w-full h-[200px] md:h-[550px] flex justify-center relative ">
      <Image src={articleBanner} priority fill alt="Lalasia Banner" style={{ objectFit: "cover" }} />
      <div className="linear-gradient(180deg, rgba(21, 20, 17, 0.00) 17.62%, #151411 84.84%) bg-gradient-to-t from-[#15141175] to-[transparent] absolute w-full h-full" />
    </div>
  );
};

export default ArticleSlide;
