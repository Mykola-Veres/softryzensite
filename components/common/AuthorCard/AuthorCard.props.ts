export interface AuthorCardProps {
  className?: string;
  author: AuthorProps;
  defaultValue: string;
  stylingIcon?: string;
  textColor?: string;
  noImg?: boolean;
}

export type AuthorProps = {
  photo: string;
  photoDefault?: string;
  url?: string;
  name: string;
  position: string;
  company: string;
  socials: {
    linkedin: string;
  };
};
