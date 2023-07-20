import { FC } from 'react';
import Link from 'next/link';

import { Logo } from '@/components/typography/Logo';
import { Intership } from '@/components/common/Intership';
import { Paragraph } from '@/components/typography/Paragraph';

import { SocialsList } from '@/components/common/SocialsList';
import { Contacts } from '@/components/common/Contacts/Contacts';

import data from '@/data/footer.json';

export const Footer: FC = () => {
  return (
    <footer className="bg-white py-5 md:py-[60px]">
      <div className="container text-lg">
        <div className="justify-between md:flex md:flex-row-reverse smOnly:flex-col">
          <div className="justify-between xl:flex xl:w-2/3">
            <Intership />
            <Contacts data={data.contacts} />
          </div>
          <div className="flex flex-col smOnly:mt-[38px] smOnly:items-center">
            <Logo bigger />

            <div className="mt-10 flex gap-5 md:mt-[60px] xl:mt-[66px] smOnly:justify-center">
              <SocialsList />
            </div>
            <div className="mt-auto flex flex-col smOnly:mt-6 smOnly:items-center">
              <Link
                href={data.policy.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-sm text-gray_light transition-all duration-300 hover:text-primary md:text-base"
              >
                {data.policy.text}
              </Link>

              <Paragraph className="mt-5 text-sm text-gray_light md:text-base xl:mt-2">
                &#169; {new Date().getFullYear()} &nbsp;
                {data.copyright}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
