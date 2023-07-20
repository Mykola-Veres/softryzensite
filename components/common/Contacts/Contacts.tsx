import { FC } from 'react';
import Link from 'next/link';

import { ContactsProps } from './Contacts.props';
import { Title } from '@/components/typography/Title';

import Mail from '@/public/images/mail.svg';
import Telegram from '@/public/images/telegram.svg';

export const Contacts: FC<ContactsProps> = ({ data }) => {
  return (
    <div className="mt-6 xl:mt-0">
      <Title tag="h3" className="md:text-xl smOnly:text-center">
        {data.title}
      </Title>

      <div className="mt-4 flex flex-col xl:mt-7">
        <Link
          href={`mailto:${data.email}`}
          className="group flex items-center text-[16px] font-light  leading-7 text-gray_light transition-all duration-300 hover:text-primary hover:underline xl:text-xl"
        >
          <Mail className="mr-3 inline h-6 w-6 text-dark group-hover:text-primary" />
          {data.email}
        </Link>

        <Link
          href={data.telegram.url}
          target="_blank"
          rel="noopener nofollow noreferrer"
          className="group mt-[10px] flex items-center text-[16px] font-light leading-7 text-gray_light transition-all duration-300 hover:text-primary hover:underline xl:mt-7 xl:text-xl"
        >
          <Telegram className="text- mr-3 inline h-6 w-6 text-dark group-hover:text-primary" />
          {data.telegram.title}
        </Link>
      </div>
    </div>
  );
};
