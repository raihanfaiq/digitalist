import React, { FC } from 'react';

interface ServiceCardProps {
  id: number;
  title: string;
  content: string;
  icon?: JSX.Element;
  numeric?: boolean;
  horizontal?: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  content,
  icon,
  numeric,
  id,
  horizontal,
}) => {
  if (horizontal) {
    return (
      <div className="flex w-full gap-3 py-6 md:w-max md:items-start md:gap-6">
        <div>
          {icon ? (
            <div className="md:w-16 md:h-16 h-11 w-11 rounded-full bg-[#F9F9F9] flex items-center justify-center">
              {icon}
            </div>
          ) : (
            <span className="text-4xl font-bold md:text-6xl text-primaryColor">
              {String(id).padStart(2, '0')}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-base font-bold md:text-2xl">{title}</h3>
          </div>
          <div className=" w-full md:max-w-[507px]">
            <p className="text-sm text-gray-200 md:text-lg">{content}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center w-full gap-3 p-6 shadow-md md:w-max md:items-start md:gap-6">
      <div>
        {icon ? (
          <div className="md:w-16 md:h-16 h-11 w-11 rounded-full bg-[#F9F9F9] flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <span className="text-4xl font-bold md:text-6xl text-primaryColor">
            {String(id).padStart(2, '0')}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-base font-bold text-[#FFF5EA] md:text-2xl">
          {title}
        </h3>
      </div>
      <div className="text-center md:text-left w-full md:w-[295px] lg:w-[346px]">
        <p className="text-sm text-textColor md:text-lg">{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
