import { FC } from 'react';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';

import { VideoPlayer } from '@/components/player';

import data from '@/data/projectPresentation.json';

export const ProjectPresentationSection: FC = () => {
  return (
    <Section className="bg-white py-10 md:py-[60px] xl:py-[60px]">
      <div className="container">
        <Title
          tag="h2"
          className="border-b-[2px] border-line pb-6 md:pb-10 md:text-[32px] md:leading-[1.4] xl:pb-[60px] xl:text-[40px] xl:leading-[56px]"
        >
          {data.title}
        </Title>
        <div className="mt-6">
          <Paragraph className="font-light text-dark md:text-xl xl:w-[920px]">
            {data.text}
          </Paragraph>
        </div>
        <div className="mx-auto mt-[8px] h-[360px] w-full md:mt-10 md:h-[360px] xl:mt-[60px] xl:w-[705px] smOnly:h-[192px]">
          <VideoPlayer url={data.playerUrl} />
        </div>
        <div className="mt-10 hidden xl:block">
          <Paragraph className=" text-primary xl:text-center xl:text-xl xl:font-semibold">
            {data.textUnderVideo}
          </Paragraph>
        </div>
      </div>
    </Section>
  );
};
