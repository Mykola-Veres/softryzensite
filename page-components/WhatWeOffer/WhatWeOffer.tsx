import { FC, Key } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import { OfferCard } from '@/components/common/OfferCard';
import { BtnLink } from '@/components/button/BtnLink';

import data from '@/data/whatWeOffer.json';

export const WhatWeOfferSection: FC = () => {
  return (
    <Section id="proposition" className="bg-white">
      <div className="container">
        <Title tag="h2" className="xl:w-96 xl:text-[40px] xl:leading-[56px]">
          {data.title}
        </Title>
        <ul className="md:mt-10 md:grid md:grid-cols-2 md:border-t-2 md:border-disabled xl:mt-[60px]">
          {data.list.map((item, ind: Key) => (
            <OfferCard index={ind as number} key={ind} item={item} />
          ))}
        </ul>
        <div className="mt-6 flex flex-col items-center md:mt-10 xl:mt-[60px]">
          <Paragraph className="text-center !text-lg font-semibold text-primary xl:!text-xl mdOnly:w-[540px]">
            {data.text}
          </Paragraph>
          <BtnLink
            scroll={true}
            className="mt-5 md:mt-6 xl:mt-10"
            href={'program'}
          >
            {data.btn}
          </BtnLink>
        </div>
      </div>
    </Section>
  );
};
