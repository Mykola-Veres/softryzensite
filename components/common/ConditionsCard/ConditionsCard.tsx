import { FC } from 'react';

import { ConditionsCardProps } from './ConditionsCard.props';

import { Paragraph } from '@/components/typography/Paragraph';

export const ConditionsCard: FC<ConditionsCardProps> = ({ item }) => {
  const { number, text, title } = item;

  return (
    <li
      key={number}
      className="relative bg-primary px-5 pt-5 sm:w-[440px] md:w-full md:py-6 md:pl-10 xl:w-[696px]"
    >
      <div className="text-white_gray smOnly:mb-[60px]">
        <Paragraph
          variantFontSize="lg_20"
          className="mb-5 text-white_gray md:mb-6"
          variant="dark"
        >
          {title}
        </Paragraph>
        <Paragraph
          variantFontSize="sm_16"
          className="text-white_gray"
          variant="dark"
        >
          {text}
        </Paragraph>
      </div>
      <div className="absolute bottom-[5px] right-[5px] xl:bottom-0 mdOnly:bottom-[-10px]">
        <p className="text-[40px] font-[900] leading-[1] text-white_light opacity-[0.2] md:text-[72px] mdOnly:leading-[1.2]">
          {number}
        </p>
      </div>
    </li>
  );
};
