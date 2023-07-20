import { FC, Key } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { ProgramCard } from '@/components/common/ProgramCard';
import { Slider } from '@/components/common/Slider';

import internshipProgramsData from '@/data/internshipPrograms.json';
import { Paragraph } from '@/components/typography/Paragraph';

export const ProgramsSection: FC = () => {
  const { title, date, program, btn } = internshipProgramsData;

  const cardOptions = {
    mobile: { perView: 1, spacing: 32 },
    tablet: { perView: 2, spacing: 32 },
    desktop: { perView: 4, spacing: 32 },
  };

  return (
    <Section className="section bg-primary" id="program">
      <div className="container">
        <Title
          variant="light"
          tag="h2"
          className="text-left mdOnly:text-[36px]"
        >
          {title}
        </Title>
        <Paragraph
          variant="white"
          className="text-[52px] !font-black leading-[1.5] opacity-[0.2] md:text-[72px]"
        >
          {date}
        </Paragraph>
        <Slider className="program-slider " options={cardOptions}>
          {program.map((item, ind: Key) => {
            return <ProgramCard key={ind} item={item} btn={btn} />;
          })}
        </Slider>
      </div>
    </Section>
  );
};
