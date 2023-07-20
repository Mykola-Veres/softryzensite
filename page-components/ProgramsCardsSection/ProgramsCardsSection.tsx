import { FC } from 'react';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { Paragraph } from '@/components/typography/Paragraph';
import { BtnLink } from '@/components/button/BtnLink';
import { ProgramPageCard } from '@/components/common/ProgramPageCard/ProgramPageCard';

import { routes } from '@/utils/routes';
import data from '@/data/programs.json';
import PageProps from './ProgramsCardsSectionProp';

export const ProgramsCardsSection: FC<PageProps> = ({ slug }) => {
  const allPrograms: {
    [key: string]: {
      subscribe: string;
      title: string;
      program: {
        overview: string;
        subservices: string[];
        number: string;
      }[];
    };
  } = data.programs;

  const currentProgram = allPrograms[slug as string];

  return (
    <Section className="section pb-20">
      <div className="container">
        {currentProgram && (
          <>
            <Title variant="dark" tag="h2" className="mb-6 text-left">
              {currentProgram.title}
            </Title>
            <Paragraph
              variant="dark"
              className="mb-6 md:mb-10 xl:w-[781px] xl:text-xl"
            >
              {currentProgram.subscribe}
            </Paragraph>
            <ul className=" mb-10 flex flex-col gap-6 md:gap-8 xl:gap-[60px] ">
              {currentProgram.program.map(item => (
                <ProgramPageCard key={item.number} program={item} />
              ))}
            </ul>
          </>
        )}

        <BtnLink
          variant="primary"
          href={data.button.link}
          className="mx-auto  border-[1px] border-solid md:h-[52px] md:w-[186px] md:font-normal"
        >
          {data.button.text}
        </BtnLink>
      </div>
    </Section>
  );
};
