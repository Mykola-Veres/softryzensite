import { FC, Key } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { WorkWithUsItem } from '@/components/common/WorkWithUsItem';

import { IWorkWithUsItem } from './WorkWithUs.props';

import data from '@/data/workWithUs.json';

export const WorkWithUs: FC = () => {
  return (
    <Section className="workWithUs relative bg-white">
      <div className=" container ">
        <ul className="mb-12 md:grid md:grid-cols-2 smOnly:mb-10">
          <li className="border-b border-b-disabled pb-5 pt-6 first:pt-0 md:py-8 md:odd:pr-4 md:even:pl-8 xl:pb-[54px] xl:pt-[60px] xl:odd:pr-10 xl:even:pl-[60px]  smOnly:first:border-none smOnly:first:p-0 [&:nth-child(2)]:pt-0">
            <Title tag="h2">{data.services.title}</Title>
          </li>
          {data.services.items.map((item: IWorkWithUsItem, index: Key) => (
            <WorkWithUsItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  );
};
