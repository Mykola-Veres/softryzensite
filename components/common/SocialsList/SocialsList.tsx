import { FC } from 'react';
import { IconLink } from '@/components/button/IconLink';

import Behance from '@/public/images/social/behance.svg';
import Instagram from '@/public/images/social/instagram.svg';
import Linkedin from '@/public/images/social/linkedin.svg';
import Dou from '@/public/images/social/dou.svg';

import data from '@/data/socials.json';

export const SocialsList: FC = () => {
  const { behance, instagram, linkedin, dou } = data.socials;

  return (
    <>
      <IconLink
        href={behance.url}
        label={behance.label}
        className="duration-300 hover:scale-110 focus:scale-110"
      >
        <Behance className="h-[34px] w-[34px]" />
      </IconLink>

      <IconLink
        href={instagram.url}
        label={instagram.label}
        className="duration-300 hover:scale-110 focus:scale-110"
      >
        <Instagram className="h-[34px] w-[34px]" />
      </IconLink>

      <IconLink
        href={linkedin.url}
        label={linkedin.label}
        className="duration-300 hover:scale-110 focus:scale-110"
      >
        <Linkedin className="h-[34px] w-[34px]" />
      </IconLink>

      <IconLink
        href={dou.url}
        label={dou.label}
        className="duration-300 hover:scale-110 focus:scale-110"
      >
        <Dou className="h-[34px] w-[34px]" />
      </IconLink>
    </>
  );
};
