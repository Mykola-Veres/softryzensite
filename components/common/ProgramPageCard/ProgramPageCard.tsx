import { FC } from 'react';

import { ProgramPageCardProps } from './ProgramPageCard.props';
import { Title } from '@/components/typography/Title';

export const ProgramPageCard: FC<ProgramPageCardProps> = ({ program }) => {
  return (
    <li className="xl:flex">
      <div className="relative min-h-[169px] bg-primary p-5 md:min-h-[170px] md:p-10 xl:min-h-[406px] xl:w-[392px]">
        <Title
          variant="light"
          tag="h2"
          className=" text-white_light md:text-[24px] xl:text-[32px] mdOnly:w-[595px] "
        >
          {program.overview}
        </Title>
        <p className="absolute bottom-0 right-1 text-[60px] font-black leading-[55px] text-white_light opacity-20 md:right-5 md:text-[72px]  md:leading-[110px] xl:right-5">
          {program.number}
        </p>
      </div>
      <div className="relative border-2 border-disabled bg-white px-3 py-5 md:min-h-[288px] md:p-5 xl:w-[824px] xl:p-[60px] xl:pr-[34px]">
        <div className=" flex flex-col gap-5  ">
          <ul className="flex flex-col gap-3 md:gap-5 ">
            {program.subservices.map((subservice, index) => (
              <li
                key={index}
                className="border-l border-disabled pl-3 xl:text-xl"
              >
                {subservice}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
