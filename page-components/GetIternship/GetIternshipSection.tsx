import { FC, Key } from 'react';

import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import { ListCard } from '../../components/common/ListCard';

import data from '@/data/youGet.json';

export const GetIternshipSection: FC = () => {
  return (
    <Section className="bg-white_gray">
      <div className="container">
        <ul className="md:grid md:grid-cols-2 xl:grid-cols-3">
          <li className="relative w-full border border-transparent sm:w-[440px] md:h-[172px] md:w-[352px] md:border-r xl:w-[304px]">
            <div className="h-full w-full smOnly:pb-8">
              <Title
                tag="h2"
                className="w-[251px] xl:w-96 xl:text-[40px] xl:leading-[56px]"
              >
                {data.title}
              </Title>
            </div>
          </li>

          {data.list.map((item, ind: Key) => (
            <ListCard key={ind} item={item} index={ind} data={data} />
          ))}
        </ul>
      </div>
    </Section>
  );
};
