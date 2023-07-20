import { BtnLink } from '@/components/button/BtnLink';
import { HeroAnimation } from '@/components/common/HeroAnimation';
import { Section } from '@/components/common/Section';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';
import hero from '@/data/hero.json';

export const Hero = () => {
  const { duration, start } = hero;
  return (
    <Section className="relative bg-white pb-[140px] pt-[120px] md:pb-[170px] md:pt-[80px] xl:pb-[233px] xl:pt-[120px]">
      <div className="container  text-center">
        <Title
          tag="h1"
          className="relative z-10 mb-5 md:mb-10 smOnly:mx-auto smOnly:max-w-[290px]"
        >
          <span>{hero.title.soft}</span>
          <span className="text-primary">{hero.title.ryzen}</span>
          <span>{hero.title.internship} </span>
        </Title>
        <Paragraph className="relative z-10 mx-auto mb-10 max-w-[269px] md:mb-10 md:max-w-[448px] md:text-xl xl:max-w-[568px] smOnly:leading-5">
          {hero.text}
        </Paragraph>
        <BtnLink
          href={'program'}
          scroll
          className="relative z-10 mx-auto mb-4 block w-[240px] md:mb-5"
        >
          {hero.button}
        </BtnLink>
        <div className="relative z-10 mx-auto	md:flex md:justify-center md:gap-4">
          <p className="text-[16px] font-semibold leading-[1.75] text-primary smOnly:mb-[3px]">
            <span className="text-dark">{duration.title}</span>
            {duration.subscript}
          </p>
          <p className="text-[16px] font-semibold leading-[1.75] text-primary">
            <span className="text-dark"> {start.title}</span>
            {start.subscript}
          </p>
        </div>
        <HeroAnimation />
      </div>
    </Section>
  );
};
