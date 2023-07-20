import { FC } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import data from '@/data/conditions.json';
import Box from '@/public/images/conditions/groupBox.svg';
import { ConditionsCard } from '@/components/common/ConditionsCard';

export const InternshipConditions: FC = () => {
  return (
    <Section className="bg-white_light" id="conditions">
      <div className="container">
        <div className="border-b-[2px] border-disabled pb-6 md:pb-10 xl:pb-[60px]">
          <Title
            tag="h2"
            variant="dark"
            className="md:text-[32px] md:leading-[1.4] xl:text-[40px]"
          >
            {data.title}
          </Title>
        </div>
        <div className="mt-6 xl:flex xl:gap-8">
          <div className="smOnly:mb-6 mdOnly:mb-10">
            <Paragraph
              variant="dark"
              variantFontSize="lg_20"
              className="xl:w-[488px] smOnly:!text-base"
            >
              {data.descriptions}
            </Paragraph>
            <Box className="hidden xl:ml-12 xl:mt-[125px] xl:block xl:h-[311px] xl:w-[287px]" />
          </div>

          <ul className="grid grid-cols-1 gap-3">
            {data.list.map(item => (
              <ConditionsCard key={item.number} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};
