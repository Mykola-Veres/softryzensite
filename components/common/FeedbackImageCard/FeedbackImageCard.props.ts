import { AuthorProps } from '../AuthorCard/AuthorCard.props';

export interface FeedbackImageCardProps {
  className?: string;
  feedback: {
    review: string;
    author: AuthorProps;
  };
  defaultValue: string;
}
