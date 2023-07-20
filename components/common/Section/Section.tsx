import { FC } from 'react';
import cn from 'classnames';

import { SectionProps } from './Section.props';

export const Section: FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={cn('py-[50px] md:py-20 xl:py-[100px]', className)}
      {...props}
    >
      {children}
    </section>
  );
};
