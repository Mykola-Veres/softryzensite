import { FC } from 'react';
import Image from 'next/image';

import { AuthorCard } from '../AuthorCard';
import { Paragraph } from '@/components/typography/Paragraph';

import { FeedbackImageCardProps } from './FeedbackImageCard.props';
import Quotes from '@/public/images/feedback/feedback-quotes.svg';

const DEFAULT_AUTHOR_PHOTO = '/images/feedbacks/default-author.svg';

export const FeedbackImageCard: FC<FeedbackImageCardProps> = ({
  feedback,
  defaultValue,
  ...props
}) => {
  const { review, author } = feedback;

  return (
    <li {...props}>
      <div className="relative h-full list-none md:flex xl:w-[804px]">
        <Quotes
          width={60}
          height={60}
          className="absolute left-2 top-2 md:left-3 md:top-3 xl:left-5 xl:top-5"
        />
        <div className="flex flex-col justify-between bg-primary px-4 pb-6 pt-[78px] md:px-3 md:pb-3  md:pt-[92px] xl:px-5 xl:pb-5 xl:pl-5 xl:pt-[100px]">
          <Paragraph
            variant="white"
            className="line-clamp-[14] pb-12 text-sm xl:line-clamp-[12] xl:text-base"
          >
            {review}
          </Paragraph>
          <AuthorCard
            className="pt-4"
            author={author}
            defaultValue={defaultValue}
            textColor="text-white_light"
            stylingIcon="text-white_light hover:text-dark focus:text-dark"
            noImg
          />
        </div>
        <Image
          className="h-auto w-full object-cover object-center md:h-auto md:w-[309px]"
          src={author.photo || DEFAULT_AUTHOR_PHOTO}
          width={320}
          height={320}
          alt={author.photo.length !== 0 ? `${author.name}` : defaultValue}
        />
      </div>
    </li>
  );
};
