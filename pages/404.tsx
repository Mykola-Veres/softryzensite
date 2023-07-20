import { NextPage } from 'next';
import Head from 'next/head';

import { BtnLink } from '@/components/button/BtnLink';
import { Paragraph } from '@/components/typography/Paragraph';
import { withLayout } from '@/layout/Layout';
import { Section } from 'components/common/Section';

import { routes } from '@/utils/routes';

import Error from '@/public/images/404/404.svg';

import notFound from '@/data/notFound.json';

const Custom404: NextPage = () => {
  const title = `404 - ${notFound.title}`;
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>{title}</title>
      </Head>

      <Section className="notFound h-full bg-white py-[100px] xl:py-[147px]">
        <div className="container">
          <Error
            width="278"
            height="117"
            className="mx-auto mb-10 md:mb-[60px] md:h-[166px] md:w-[396px]"
          />
          <Paragraph className="mb-10 text-center text-lg font-semibold md:text-xl xl:mb-[64px]">
            {notFound.text}
          </Paragraph>
          <div className="mx-auto flex max-w-[558px] flex-col gap-3 md:flex-row md:gap-10">
            <BtnLink href={routes.HOME} className="mx-auto">
              {notFound.buttons.home}
            </BtnLink>
          </div>
        </div>
      </Section>
    </>
  );
};

export default withLayout(Custom404);
