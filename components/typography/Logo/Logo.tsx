import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { routes } from '@/utils/routes';

import LogoImg from '@/public/images/logo.svg';

import { LogoProps } from './Logo.props';

import data from '@/data/logo.json';

export const Logo: FC<LogoProps> = ({
  sticky,
  width = 115,
  height = 20,
  className,
  bigger,
}) => {
  return (
    <Link
      aria-label={data.aria}
      href={routes.HOME}
      className={cn(
        'block hover:outline-primary focus:outline-primary',
        { ['py-[15px] xl:py-2']: sticky },
        className,
      )}
    >
      <LogoImg
        className={`${bigger && 'h-[32px] w-[186px]'} md:h-[32px] md:w-[186px]`}
        width={width}
        height={height}
        aria-label={data.aria}
      />
    </Link>
  );
};
