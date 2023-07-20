import Head from 'next/head';
import { withLayout } from '@/layout/Layout';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { ProgramsCardsSection } from '@/page-components/ProgramsCardsSection';
import { routes } from '@/utils/routes';

interface MyPageProps {
  slug: string;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const ProgramPage = ({ slug }: MyPageProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>SoftRyzen Internship</title>
      </Head>
      <ProgramsCardsSection slug={slug as string} />
    </>
  );
};

export default withLayout(ProgramPage);

export const getStaticPaths: GetStaticPaths = async () => {
  const program = routes.PROGRAMS;
  const paths = program.map((path: string) => ({
    params: { slug: path },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MyPageProps, Params> = async ({
  params,
}) => {
  const { slug } = params || {};

  return {
    props: {
      slug: slug as string,
    },
  };
};
