import { NextPage } from 'next';
import Head from 'next/head';
import { withLayout } from '@/layout/Layout';

import { Hero } from '@/page-components/Hero/Hero';
import { PartnerSection } from '@/page-components/Partner';
import { ProjectPresentationSection } from '@/page-components/ProjectPresentation';
import { FeedbacksSection } from '@/page-components/Feedbacks';
import { CommonQuestionsSection } from '@/page-components/CommonQuestions';
import { GetIternshipSection } from '@/page-components/GetIternship';

import { ProgramsSection } from '@/page-components/ProgramsSection/ProgramsSection';
import { InternshipConditions } from '@/page-components/InternshipConditions';
import { WhatWeOfferSection } from '@/page-components/WhatWeOffer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>SoftRyzen Internship</title>
      </Head>
      <Hero />
      <GetIternshipSection />
      <PartnerSection />
      <InternshipConditions />
      <WhatWeOfferSection />
      <ProgramsSection />
      <ProjectPresentationSection />
      <FeedbacksSection />
      <CommonQuestionsSection />
    </>
  );
};

export default withLayout(Home);
