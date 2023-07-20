import { FC } from 'react';
import { Tab } from '@headlessui/react';

import { QuestionsProps } from './CommonQuestionsSection.props';

import { Section } from '@/components/common/Section';
import { QuestionItem } from '@/components/common/QuestionItem';
import { Title } from '@/components/typography/Title';

import LogoFAQ from '@/public/images/faq.svg';

import faq from '@/data/faq.json';

export const CommonQuestionsSection: FC = () => {
  const questions = faq.questions as QuestionsProps[];

  return (
    <Section className="bg-white xl:pt-20" id="faq">
      <div className="container">
        <Title
          tag="h2"
          variant="dark"
          className="tab-section-title relative mb-[68px] md:mb-10 md:leading-[1.4] xl:mb-11 xl:text-[40px]"
        >
          {faq.title}
        </Title>
        <Tab.Group
          as="div"
          className="relative xl:flex xl:items-end xl:justify-end xl:gap-x-10"
        >
          <LogoFAQ className="absolute left-4 top-2 hidden h-[342px] w-[249px] xl:block" />
          <Tab.List
            as="ul"
            className="flex min-h-[392px] flex-col gap-y-12 md:min-h-[372px] xl:min-h-[348px] xl:w-[907px]"
          >
            {questions.map((question, index) => {
              return <QuestionItem key={index} question={question} />;
            })}
          </Tab.List>
        </Tab.Group>
      </div>
    </Section>
  );
};
