import { FC } from 'react';

import { BtnLink } from '@/components/button/BtnLink';
import { CardWrapper } from '@/components/common/CardWrapper/CardWrapper';
import { Paragraph } from '@/components/typography/Paragraph';
import { Title } from '@/components/typography/Title';

import { ProgramCardProps } from './ProgramCard.props';

export const ProgramCard: FC<ProgramCardProps> = ({ item, btn }) => {
  const { text, title, path, active } = item;
  return (
    <CardWrapper
      tag="li"
      className="keen-slider__slide relative mx-auto flex  h-[296px] w-[280px] flex-col items-center bg-white px-5 py-6"
    >
      <Title tag="h3" className="mb-4 text-center !text-[24px]">
        {title}
      </Title>
      <Paragraph
        variantFontSize="sm_16"
        className="mb-2 max-w-[310px] text-center "
      >
        {text}
      </Paragraph>

      <BtnLink
        variant="ghost"
        href={path}
        className="mt-auto block"
        disabled={!active}
      >
        {active ? btn.text.active : btn.text.nonActive}
      </BtnLink>
    </CardWrapper>
  );
};
