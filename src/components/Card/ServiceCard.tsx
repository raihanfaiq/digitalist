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
      <div className="relative flex items-center w-full gap-3 py-6 text-center md:gap-6">
        <div>
          {icon ? (
            <div className="md:w-16 md:h-16 h-11 w-11 rounded-full bg-[#F9F9F9] flex items-center justify-center">
              {icon}
            </div>
          ) : (
            <span className="text-6xl font-bold md:text-6xl">
              {String(id + 1).padStart(2, '0')}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-base font-bold md:text-2xl">{title}</h3>
          <p className="text-sm text-gray-200 md:text-lg">{content}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center w-full gap-3 p-6 md:gap-6">
      <div>
        {icon ? (
          <div className="md:w-16 md:h-16 h-11 w-11 rounded-full bg-[#F9F9F9] flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <span className="text-6xl font-bold md:text-6xl text-primaryColor">
            {String(id).padStart(2, '0')}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-bold text-[#FFF5EA] text-lg">{title}</h3>
      </div>
      <p className="text-sm text-center text-gray-200 md:text-lg">{content}</p>
    </div>
  );
};

export default ServiceCard;
