import { FC } from 'react';

import { OfferCardProps } from './OfferCard.props';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

export const OfferCard: FC<OfferCardProps> = ({ item, index }) => {
  const { number, text, heading } = item;

  return (
    <li
      className={`w-full border-b-2 border-disabled pb-6 pt-6 md:pt-8 xl:pt-10 ${
        index !== undefined && index % 2 === 0
          ? 'md:border-r-2 md:border-disabled'
          : ''
      } ${
        index !== undefined && index % 2 !== 0
          ? 'md:pl-4 xl:pl-[60px]'
          : 'md:pr-4 xl:pr-10'
      }`}
    >
      <div className="h-full w-full">
        <div className="h-full w-full">
          <div className="flex justify-between">
            <Title tag="h3" className="!text-lg text-primary xl:!text-xl">
              {heading}
            </Title>
            <Paragraph className="text-xl font-semibold text-disabled ">
              {number}
            </Paragraph>
          </div>
          <Paragraph
            className="mt-4 max-w-[476px] md:mt-3 xl:mt-6"
            variantFontSize="sm_16"
          >
            {text}
          </Paragraph>
        </div>
      </div>
    </li>
  );
};
