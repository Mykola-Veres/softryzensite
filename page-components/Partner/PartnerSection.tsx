import { FC } from 'react';
import { Section } from '@/components/common/Section';
import { Title } from '@/components/typography/Title';
import GoIT from '@/public/images/brands/goit.svg';
import Logo from '@/public/images/partners/logo-3d-blue.svg';
import LogRight from '@/public/images/partners/logo-3d-blue-right.svg';

export const PartnerSection: FC = () => {
  return (
    <Section className="relative bg-primary md:py-[60px] xl:pb-[80px] xl:pt-[60px]">
      <div className="container relative">
        <Logo className="absolute bottom-[52%] left-0 h-[92px] w-[77px] md:bottom-[-37%] md:h-[217px] md:w-[186px] xl:bottom-[-16%] xl:left-5" />
        <Title
          tag="h2"
          variant="light"
          className="mb-[40px] text-center xl:mb-[60px] mdOnly:text-[36px] mdOnly:leading-[1.1]"
        >
          Партнер
        </Title>
        <GoIT
          fill="true"
          className="ml-auto mr-auto h-9 w-[120px] fill-white"
        />
        <LogRight className="absolute right-0 top-[65%] h-[78px] w-[73px] md:top-[-25px] md:h-[200px] md:w-[186px] xl:right-5 xl:top-[15px]" />
      </div>
    </Section>
  );
};
