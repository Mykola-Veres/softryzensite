import { FC } from 'react';
import Link from 'next/link';

import { Title } from '@/components/typography/Title';

import data from '@/data/footer.json';

export const Intership: FC = () => {
  return (
    <div>
      <Title className="md:text-xl smOnly:text-center" tag="h3">
        {data.internship.title}
      </Title>
      <ul className="mt-2 grid w-full grid-cols-[3fr_2fr] xl:mt-3 xl:flex xl:flex-col">
        {data.internship.directions.map((directions, index) => (
          <li key={index} className="mt-2">
            <Link
              className="text-sm font-normal text-gray_light transition-all duration-300 hover:text-primary xl:text-lg"
              href={directions.path}
            >
              {directions.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
