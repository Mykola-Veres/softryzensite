import { FC, useState, useEffect } from 'react';

import { ListCardProps } from './ListCard.props';

import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

export const ListCard: FC<ListCardProps> = ({ item, index, data }) => {
  const { number, text, heading, time } = item;
  const { list } = data || {};
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % (list?.length || 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [list]);

  return (
    <li
      className={`${
        activeIndex === index ? 'bg-primary' : ''
      } get-card md:first relative  w-full border border-b-0 border-disabled px-3 pb-4 pt-8 last:border-b md:px-5 xl:px-8 smOnly:pt-3`}
    >
      <div className="get-card--top h-full w-full">
        <div className="get-card--bottom h-full w-full">
          <div className="flex justify-between">
            <Title
              tag="h3"
              className={`${
                activeIndex === index ? 'text-white' : ''
              } !text-xl`}
            >
              {heading}
            </Title>
            <Paragraph
              className={`${
                activeIndex === index ? 'text-white' : ''
              } text-xl font-semibold text-disabled`}
            >
              {number}
            </Paragraph>
          </div>
          <Paragraph
            className={`${
              activeIndex === index ? 'text-white' : ''
            } mt-5 smOnly:mt-4`}
            variantFontSize="sm_16"
          >
            {text}
          </Paragraph>
          <Paragraph
            className={`${
              activeIndex === index ? 'text-white' : 'text-primary'
            } mt-9 text-[12px] leading-3  smOnly:mt-10`}
          >
            {time}
          </Paragraph>
        </div>
      </div>
    </li>
  );
};
