import React, { FC } from 'react';

interface ServiceCardProps {
  id: number;
  title: string;
  content: string;
  icon?: JSX.Element;
  numeric?: boolean;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  content,
  icon,
  numeric,
  id,
}) => {
  return (
    <div className="flex flex-col items-center w-full gap-3 p-6 lg:gap-6">
      <div>
        {icon ? (
          <div className="md:w-16 md:h-16 h-11 w-11 rounded-full bg-[#F9F9F9] flex items-center justify-center">
            {icon}
          </div>
        ) : (
          <span className="text-4xl font-bold lg:text-6xl text-[#FFF5EA]">
            {String(id).padStart(2, '0')}
          </span>
        )}
      </div>
      <div>
        <h3 className="font-bold text-[#FFF5EA] text-2xl lg:text-2xl">
          {title}
        </h3>
      </div>
      <p className="text-xl text-center text-gray-200 lg:text-2xl">{content}</p>
    </div>
  );
};

export default ServiceCard;
