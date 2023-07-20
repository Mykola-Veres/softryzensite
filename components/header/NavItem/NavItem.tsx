import { FC } from 'react';
import { scroller } from 'react-scroll';

import { useRouter } from 'next/router';

import { routes } from '@/utils/routes';
import { NavItemProps } from './NavItem.props';
import { BtnLink } from '@/components/button/BtnLink';

export const NavItem: FC<NavItemProps> = ({ item, onItemClick }) => {
  const router = useRouter();

  const handleClick = (element: string) => {
    if (element) {
      scroller.scrollTo(element, {
        duration: 500,
        smooth: true,
      });
      onItemClick();
    }
  };

  const onItemEnter = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleClick(item.scrollId);
    }
  };

  return (
    <li>
      <BtnLink
        href={router.pathname === routes.HOME ? item.scrollId : item.url}
        variant="simple"
        className="notXl:text-xl notXl:text-white notXl:hover:text-white"
        scroll={router.pathname === routes.HOME ? true : false}
        onClick={onItemClick}
        onKeyUp={onItemEnter}
      >
        {item.label}
      </BtnLink>
    </li>
  );
};
