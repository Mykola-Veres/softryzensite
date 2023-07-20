import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  MouseEventHandler,
} from 'react';

export interface BtnLinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'secondary' | 'simple';
  disabled?: boolean;
  href?: string;
  arrow?: boolean;
  scroll?: boolean;
  className?: string;
  onClick?: ((() => void) & MouseEventHandler<HTMLButtonElement>) | undefined;
  onKeyUp?: (event: any) => void;
}
